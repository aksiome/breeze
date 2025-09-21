from functools import wraps
from typing import Any, Callable

import emoji
from bs4 import BeautifulSoup
from docutils import nodes
from sphinx.application import Sphinx
from sphinx.builders.html import StandaloneHTMLBuilder
from sphinx.transforms.post_transforms import SphinxPostTransform


class TableWrapper(SphinxPostTransform):
    """A Sphinx post-transform that wraps `table` in a `div` container."""

    formats = ("html",)
    default_priority = 500

    def run(self, **kwargs) -> None:
        for node in list(self.document.findall(nodes.table)):
            new_node = nodes.container(classes=["table"])
            new_node.update_all_atts(node)
            node.parent.replace(node, new_node)
            new_node.append(node)


def config_provided_by_user(app: Sphinx, key: str) -> bool:
    """Check if the user has manually provided the config."""
    return any(key in i for i in [app.config.overrides, app.config._raw_config])


def set_default_config(app: Sphinx, key: str, value: Any) -> None:
    """Set a default value for a configuration key if the user has not provided one."""
    if not config_provided_by_user(app, key):
        app.config[key] = value


def render_fragment(builder: StandaloneHTMLBuilder, node: nodes.Element) -> str:
    """Render the given node as an HTML fragment, using the builder provided."""
    return builder.render_partial(node)["fragment"]


def replace_js_tag(js_tag: Callable[..., str]) -> Callable[..., str]:
    """Add 'defer' to script tags lacking 'defer' or 'async' attributes."""
    @wraps(js_tag)
    def wrapper(js):
        script = js_tag(js)
        return script.replace("<script ", "<script defer ", 1) if (
            script.startswith("<script ")
            and "src=" in script
            and not any(attr in script for attr in {"defer", "async"})
        ) else script.replace('defer="defer"', "defer").replace('async="async"', "async")
    return wrapper


def simplify_page_toc(html: str) -> str:
    """Simplify a page's table of contents (TOC) HTML by unwrapping redundant nesting."""
    soup = BeautifulSoup(html, "html.parser")
    if root := soup.find("ul"):
        item = root.find_all("li", recursive=False)
        if len(item) == 1:
            return str(item[0].find("ul") or "").strip()
    return html.strip()


def insert_zero_width_space(
    html: str,
    before: list = ["."],
    after: list = ["_",":"],
) -> str:
    """Insert a zero-width space (U+200B) before or after each specified separator character."""
    soup = BeautifulSoup(html, "html.parser")
    for text_node in soup.find_all(string=True):
        new_text = str(text_node)
        for sep in before:
            new_text = new_text.replace(sep, '\u200b' + sep)
        for sep in after:
            new_text = new_text.replace(sep, sep + '\u200b')
        if new_text != text_node:
            text_node.replace_with(new_text)
    return str(soup)


def wrap_emoji(text: str) -> str:
    """Wrap emojis in a `span` container"""
    return "".join(
        f'<span class="emoji">{token.chars}</span>'
        if isinstance(token.value, emoji.EmojiMatch) else token.chars
        for token in emoji.analyze(text, non_emoji=True, join_emoji=True)
    )
