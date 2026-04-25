#!/usr/bin/env python3
"""
Sacred Trails — Batch Image Generator
Reads image-prompts.yaml and calls OpenAI Images API (gpt-image-1)
Saves output to public/ directory

Usage:
  python3 scripts/generate-images.py --all
  python3 scripts/generate-images.py --slug camino-frances
  python3 scripts/generate-images.py --type og
  python3 scripts/generate-images.py --type map --slug kumano-nakahechi
"""

import argparse
import base64
import os
import sys
import yaml
from pathlib import Path

try:
    from openai import OpenAI
except ImportError:
    print("Missing: pip install openai pyyaml")
    sys.exit(1)

ROOT = Path(__file__).parent.parent
YAML_PATH = Path(__file__).parent / "image-prompts.yaml"
PUBLIC = ROOT / "public"

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))


def load_config():
    with open(YAML_PATH) as f:
        return yaml.safe_load(f)


def generate_image(prompt: str, size: str, output_path: Path, label: str):
    if output_path.exists():
        print(f"  [SKIP] {label} — already exists")
        return

    print(f"  [GEN]  {label}")
    output_path.parent.mkdir(parents=True, exist_ok=True)

    # Map size strings to OpenAI accepted values
    size_map = {
        "1792x1024": "1792x1024",
        "1024x1024": "1024x1024",
        "1024x1792": "1024x1792",
    }
    api_size = size_map.get(size, "1792x1024")

    response = client.images.generate(
        model="gpt-image-1",
        prompt=prompt,
        n=1,
        size=api_size,
        output_format="jpeg" if str(output_path).endswith(".jpg") else "png",
    )

    image_data = base64.b64decode(response.data[0].b64_json)
    output_path.write_bytes(image_data)
    print(f"         → saved {output_path.relative_to(ROOT)}")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--all", action="store_true", help="Generate all 37 images")
    parser.add_argument("--slug", help="Only process this route slug")
    parser.add_argument("--type", choices=["hero", "map", "og"], help="Only generate this type")
    args = parser.parse_args()

    cfg = load_config()
    global_style_hero = cfg["global"]["hero_style"]
    global_style_map = cfg["global"]["map_style"]

    # OG image
    if not args.slug and (args.all or args.type == "og" or not args.type):
        og = cfg["og"]
        full_prompt = f"{og['prompt']} {global_style_hero}"
        generate_image(
            prompt=full_prompt,
            size=og["size"],
            output_path=PUBLIC / og["filename"],
            label="OG image",
        )

    # Route images
    for route in cfg["routes"]:
        slug = route["slug"]
        if args.slug and slug != args.slug:
            continue

        if args.type in (None, "hero") or args.all:
            hero = route["hero"]
            full_prompt = f"{hero['prompt']} {global_style_hero}"
            generate_image(
                prompt=full_prompt,
                size=hero["size"],
                output_path=PUBLIC / hero["filename"],
                label=f"{slug} hero",
            )

        if args.type in (None, "map") or args.all:
            map_ = route["map"]
            full_prompt = f"{map_['prompt']} {global_style_map}"
            generate_image(
                prompt=full_prompt,
                size=map_["size"],
                output_path=PUBLIC / map_["filename"],
                label=f"{slug} map",
            )

    print("\nDone.")


if __name__ == "__main__":
    main()
