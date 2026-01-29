"""Provides SVG icons for the theme."""

from json import loads
from pathlib import Path


ICONS = loads((Path(__file__).parent / "theme/breeze/static/icons.json").read_text())


def render_icon(name: str, size: str, default: str = "link") -> str:
    """Get the SVG icon by name and size."""
    icon = ICONS.get(name, ICONS.get(default))
    return icon.get(size, icon.get("24", icon.get("16", "")))
