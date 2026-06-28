#!/usr/bin/env python3
"""Basic OpenReason framework validator.

Usage:
    python validators/validate_framework.py examples/walton.framework.yaml schemas/framework.schema.yaml
"""

from __future__ import annotations

import sys
from pathlib import Path

try:
    import yaml
except ImportError as exc:
    raise SystemExit("Missing dependency: PyYAML. Install with: pip install pyyaml") from exc

try:
    from jsonschema import Draft202012Validator
except ImportError as exc:
    raise SystemExit("Missing dependency: jsonschema. Install with: pip install jsonschema") from exc


def load_yaml(path: Path) -> object:
    with path.open("r", encoding="utf-8") as f:
        return yaml.safe_load(f)


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: validate_framework.py <framework.yaml> <schema.yaml>", file=sys.stderr)
        return 2

    framework_path = Path(sys.argv[1])
    schema_path = Path(sys.argv[2])

    if not framework_path.exists():
        print(f"Framework file not found: {framework_path}", file=sys.stderr)
        return 2
    if not schema_path.exists():
        print(f"Schema file not found: {schema_path}", file=sys.stderr)
        return 2

    framework = load_yaml(framework_path)
    schema = load_yaml(schema_path)

    validator = Draft202012Validator(schema)
    errors = sorted(validator.iter_errors(framework), key=lambda e: list(e.path))

    if errors:
        print(f"Validation failed: {framework_path}")
        for error in errors:
            location = ".".join(str(p) for p in error.path) or "<root>"
            print(f"- {location}: {error.message}")
        return 1

    print(f"Validation passed: {framework_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
