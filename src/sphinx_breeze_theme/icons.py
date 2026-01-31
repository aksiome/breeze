"""Provides SVG icons for the theme."""

from json import loads
from pathlib import Path


ICONS = loads((Path(__file__).parent / "theme/breeze/static/icons.json").read_text())


def render_icon(name: str, size: str, default: str = "link") -> str:
    """Get the SVG icon by name and size."""
    icon = ICONS.get(name) or ICONS.get(default)
    if icon is None:
        return ""
    return icon.get(size) or icon.get("24") or icon.get("16") or ""
