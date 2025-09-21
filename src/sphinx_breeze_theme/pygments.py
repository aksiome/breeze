"""Methods to overwrite the pygments css stylesheet.

inspired by the Furo theme
https://github.com/pradyunsg/furo/blob/main/src/furo/__init__.py
"""

from pathlib import Path
from typing import Iterator

from pygments.formatters import HtmlFormatter
from sphinx.application import Sphinx
from sphinx.highlighting import PygmentsBridge


def _get_styles(formatter: "HtmlFormatter[str]", prefix: str) -> Iterator[str]:
    """Get styles out of a formatter, where everything has the correct prefix."""
    for line in formatter.get_linenos_style_defs():
        yield f"{prefix} {line}"
    yield from formatter.get_background_style_defs(prefix)
    yield from formatter.get_token_style_defs(prefix)


def get_pygments_stylesheet(light_style: str, dark_style: str) -> str:
    light_formatter = PygmentsBridge.html_formatter(style=light_style)
    dark_formatter = PygmentsBridge.html_formatter(style=dark_style)

    lines = []
    light_prefix = '.highlight'
    lines.extend(_get_styles(light_formatter, prefix=light_prefix))
    dark_prefix = 'html[data-theme="dark"] .highlight'
    lines.extend(_get_styles(dark_formatter, prefix=dark_prefix))

    return "\n".join(lines)


def overwrite_pygments_css(app: Sphinx) -> None:
    pygments_css = Path(app.builder.outdir) / "_static" / "pygments.css"
    pygments_css.parent.mkdir(exist_ok=True)
    pygments_css.write_text(get_pygments_stylesheet(
        app.config.pygments_light_style,
        app.config.pygments_dark_style,
    ))
