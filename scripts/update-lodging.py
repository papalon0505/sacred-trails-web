#!/usr/bin/env python3
"""
update-lodging.py — Sacred Trails lodging data updater

Usage:
  python3 scripts/update-lodging.py [--route SLUG] [--apply]

Without --apply: prints a diff report (dry run)
With --apply:    writes updated data to lib/data/lodging.ts and Flutter JSON

Requirements: pip install requests beautifulsoup4 pyyaml
"""

import argparse
import json
import re
import sys
import time
from pathlib import Path
from typing import Optional
import urllib.parse

try:
    import requests
    from bs4 import BeautifulSoup
    import yaml
except ImportError:
    print("Missing deps — run: pip install requests beautifulsoup4 pyyaml")
    sys.exit(1)

ROOT = Path(__file__).parent.parent
SOURCES_YAML = Path(__file__).parent / "lodging-sources.yaml"
LODGING_TS = ROOT / "lib/data/lodging.ts"
FLUTTER_ROOT = Path("/Users/chenglungchiang/.openclaw/workspace/products/buencamino-flutter")

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; SacredTrailsBot/1.0)",
    "Accept-Language": "es,en;q=0.9",
}


# ── Gronze parser ────────────────────────────────────────────────────────────

def fetch_gronze_stage(url: str) -> list[dict]:
    """Fetch a Gronze.com etapa page and extract albergue entries."""
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        r.raise_for_status()
    except Exception as e:
        print(f"  WARN: failed to fetch {url}: {e}")
        return []

    soup = BeautifulSoup(r.text, "html.parser")
    albergues = []

    # Gronze structures albergues inside .alojamiento or similar containers
    # Look for price patterns: €N or N€
    for block in soup.select(".alojamiento, .accommodation, article.node"):
        name_el = block.select_one("h2, h3, .title, .field-title")
        if not name_el:
            continue
        name = name_el.get_text(strip=True)
        if not name:
            continue

        # Town — usually in a breadcrumb or subtitle
        town = ""
        town_el = block.select_one(".locality, .town, .municipio")
        if town_el:
            town = town_el.get_text(strip=True)

        # Price — look for €N pattern
        price = None
        text = block.get_text()
        price_match = re.search(r'€\s*(\d+(?:\.\d+)?)', text)
        if price_match:
            price = float(price_match.group(1))

        # Beds
        beds = None
        beds_match = re.search(r'(\d+)\s*(?:plaza|bed|cama)', text, re.I)
        if beds_match:
            beds = int(beds_match.group(1))

        # Municipal vs private
        is_municipal = bool(re.search(r'municipal|concejo|ayuntamiento', text, re.I))

        # Website
        website = ""
        link = block.select_one("a[href^='http']")
        if link:
            href = link.get("href", "")
            if "gronze.com" not in href:
                website = href

        albergues.append({
            "name": name,
            "town": town,
            "price": price,
            "totalBeds": beds,
            "isMunicipal": is_municipal,
            "website": website or url,
        })

    return albergues


def fetch_gronze_route(stage_urls: list[str]) -> list[dict]:
    """Fetch multiple Gronze stage pages for a route."""
    all_entries = []
    seen_names = set()
    for url in stage_urls:
        print(f"  Fetching {url}")
        entries = fetch_gronze_stage(url)
        for e in entries:
            if e["name"] not in seen_names:
                seen_names.add(e["name"])
                all_entries.append(e)
        time.sleep(1.5)  # be polite
    return all_entries


# ── Kumano Travel parser ─────────────────────────────────────────────────────

def fetch_kumano(url: str) -> list[dict]:
    """Fetch kumano-travel.com accommodations page."""
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        r.raise_for_status()
    except Exception as e:
        print(f"  WARN: failed to fetch {url}: {e}")
        return []

    soup = BeautifulSoup(r.text, "html.parser")
    entries = []

    for card in soup.select(".accommodation-card, .search-result-item, article"):
        name_el = card.select_one("h2, h3, .name, .title")
        if not name_el:
            continue
        name = name_el.get_text(strip=True)

        town = ""
        town_el = card.select_one(".location, .area, .place")
        if town_el:
            town = town_el.get_text(strip=True)

        price = None
        price_el = card.select_one(".price, .rate")
        if price_el:
            m = re.search(r'[¥￥]\s*([\d,]+)', price_el.get_text())
            if m:
                price = int(m.group(1).replace(",", ""))

        link_el = card.select_one("a[href]")
        website = ""
        if link_el:
            href = link_el.get("href", "")
            if href.startswith("/"):
                website = "https://www.kumano-travel.com" + href
            elif href.startswith("http"):
                website = href

        entries.append({
            "name": name,
            "town": town,
            "price": price,
            "currency": "JPY",
            "totalBeds": None,
            "isMunicipal": False,
            "website": website,
        })

    return entries


# ── Diff logic ───────────────────────────────────────────────────────────────

def load_current_lodging_ts() -> dict[str, list[dict]]:
    """Parse current lodging.ts and return dict keyed by route slug."""
    content = LODGING_TS.read_text()
    # Extract the JS object using a simple regex approach
    m = re.search(r'export const lodgingByRoute[^=]*=\s*(\{[\s\S]+\})\s*$', content)
    if not m:
        return {}
    # Try to eval as JSON-like (strip trailing commas)
    obj_str = m.group(1)
    obj_str = re.sub(r',\s*([}\]])', r'\1', obj_str)  # remove trailing commas
    try:
        return json.loads(obj_str)
    except Exception:
        return {}


def diff_lodging(route: str, current: list[dict], fetched: list[dict]) -> dict:
    """Compare current vs fetched entries and return diff summary."""
    current_names = {e["name"] for e in current}
    fetched_names = {e["name"] for e in fetched}

    added = [e for e in fetched if e["name"] not in current_names]
    removed = [e for e in current if e["name"] not in fetched_names]

    price_changes = []
    for f in fetched:
        match = next((c for c in current if c["name"] == f["name"]), None)
        if match and f.get("price") is not None and match.get("price") != f["price"]:
            price_changes.append({
                "name": f["name"],
                "old": match.get("price"),
                "new": f["price"],
            })

    return {
        "route": route,
        "added": added,
        "removed": removed,
        "price_changes": price_changes,
        "fetched_total": len(fetched),
        "current_total": len(current),
    }


def print_diff_report(diffs: list[dict]):
    """Print human-readable diff report."""
    print("\n" + "=" * 60)
    print("LODGING UPDATE REPORT")
    print("=" * 60)

    has_changes = False
    for d in diffs:
        if not (d["added"] or d["removed"] or d["price_changes"]):
            print(f"\n✓ {d['route']} — no changes ({d['current_total']} entries)")
            continue

        has_changes = True
        print(f"\n📍 {d['route']}")

        if d["added"]:
            print(f"  + Added ({len(d['added'])}):")
            for e in d["added"]:
                price_str = f"€{e['price']}" if e.get("price") else "price unknown"
                print(f"    · {e['name']} ({e.get('town', '?')}) — {price_str}")

        if d["removed"]:
            print(f"  - Removed ({len(d['removed'])}):")
            for e in d["removed"]:
                print(f"    · {e['name']} ({e.get('town', '?')})")

        if d["price_changes"]:
            print(f"  ↕ Price changes ({len(d['price_changes'])}):")
            for c in d["price_changes"]:
                old = f"€{c['old']}" if c["old"] is not None else "?"
                new = f"€{c['new']}"
                print(f"    · {c['name']}: {old} → {new}")

    if not has_changes:
        print("\n✓ All routes up to date — no changes detected.")
    else:
        print("\nRun with --apply to write changes.")

    print("=" * 60)


# ── Apply changes ────────────────────────────────────────────────────────────

def apply_changes(route: str, new_entries: list[dict]):
    """Write new entries to lodging.ts (replace route section)."""
    content = LODGING_TS.read_text()

    # Build new JSON block for this route
    entries_json = json.dumps(new_entries, ensure_ascii=False, indent=4)
    entries_json = entries_json.replace('"true"', 'true').replace('"false"', 'false')

    # Replace the existing route section or append
    pattern = rf'"{re.escape(route)}":\s*\[[\s\S]*?\](?=\s*[,}}])'
    new_block = f'"{route}": {entries_json}'

    if re.search(pattern, content):
        content = re.sub(pattern, new_block, content)
    else:
        # Append before closing }
        content = content.rstrip().rstrip("}").rstrip() + f",\n  {new_block}\n}}\n"

    LODGING_TS.write_text(content)
    print(f"  ✓ Updated lodging.ts — {route} ({len(new_entries)} entries)")

    # Also update Flutter JSON if section dir exists
    flutter_path = FLUTTER_ROOT / f"assets/data/sections/{route.replace('-', '_')}/lodging.json"
    if flutter_path.parent.exists():
        flutter_entries = []
        for e in new_entries:
            fe = dict(e)
            fe["route"] = route.replace("-", "_")
            if "lat" not in fe:
                fe["lat"] = None
                fe["lon"] = None
            flutter_entries.append(fe)
        flutter_path.write_text(json.dumps(flutter_entries, ensure_ascii=False, indent=2))
        print(f"  ✓ Updated Flutter {flutter_path.name}")


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Update Sacred Trails lodging data")
    parser.add_argument("--route", help="Only process this route slug")
    parser.add_argument("--apply", action="store_true", help="Write changes (default: dry run)")
    args = parser.parse_args()

    sources = yaml.safe_load(SOURCES_YAML.read_text())
    current_data = load_current_lodging_ts()

    routes_to_process = sources["routes"]
    if args.route:
        routes_to_process = {args.route: sources["routes"][args.route]}

    diffs = []
    fetched_by_route: dict[str, list[dict]] = {}

    for slug, cfg in routes_to_process.items():
        source = cfg.get("source", "manual")
        if source == "manual":
            print(f"  SKIP {slug} (manual source)")
            continue

        print(f"\n→ Fetching {slug} ({source})...")
        if source == "gronze":
            stage_urls = cfg.get("gronze_stages", [])
            if not stage_urls:
                print(f"  SKIP — no stage URLs defined")
                continue
            fetched = fetch_gronze_route(stage_urls)
        elif source == "kumano":
            url = cfg.get("kumano_url", "")
            fetched = fetch_kumano(url)
        else:
            continue

        if not fetched:
            print(f"  WARN: no data fetched for {slug}")
            continue

        fetched_by_route[slug] = fetched
        current = current_data.get(slug, [])
        diffs.append(diff_lodging(slug, current, fetched))

    print_diff_report(diffs)

    if args.apply and fetched_by_route:
        print("\nApplying changes...")
        for slug, entries in fetched_by_route.items():
            apply_changes(slug, entries)
        print("\n✓ Done. Run: npx tsc --noEmit to verify types.")


if __name__ == "__main__":
    main()
