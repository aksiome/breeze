"""Methods to transform the toctree from Sphinx's toctree function's output."""

from functools import cache
from typing import Callable, Optional

from bs4 import BeautifulSoup
from docutils import nodes
from sphinx import addnodes
from sphinx.application import Sphinx
from sphinx.environment.adapters.toctree import TocTree

from sphinx_breeze_theme.utils import render_fragment


def create_custom_toctree(app: Sphinx, pagename: str) -> Callable[..., Optional[str]]:
    """Create a callable that generates a custom HTML toctree fragment for a given page."""

    @cache
    def toctree(level: int = 1, **kwargs) -> str | None:
        """Generate the toctree HTML fragment for the current page."""
        kwargs.setdefault("collapse", False)
        kwargs.setdefault("titles_only", True)

        if toctree := get_toctree_node(
            app=app,
            level=level,
            docname=pagename,
            toctree=TocTree(app.builder.env),
            **kwargs,
        ):
            html = render_fragment(app.builder, toctree)
            # Add collapse controls unless the toctree is "collapsed"
            return html if kwargs["collapse"] else add_collapse_controls(html)

    return toctree


def get_toctree_node(
    app: Sphinx,
    level: int,
    docname: str,
    toctree: TocTree,
    **kwargs,
) -> nodes.Element | None:
    """Retrieve a toctree node for a document, starting at a specific ancestor level."""
    kwargs["includehidden"] = True
    if level == 0:
        return toctree.get_toctree_for(
            docname=docname,
            builder=app.builder,
            **kwargs
        )

    ancestors = toctree.get_toctree_ancestors(docname)
    if len(ancestors) < level:
        return None

    ancestor_node = toctree.env.tocs.get(ancestors[-level])
    if not ancestor_node:
        return None

    result = addnodes.compact_paragraph(toctree=True)
    for node in ancestor_node.findall(addnodes.toctree):
        if resolved := toctree.resolve(
            docname=docname,
            builder=app.builder,
            toctree=node,
            **kwargs,
        ):
            result.extend(resolved.children)

    return result


def add_collapse_controls(toctree_html: str) -> str:
    """Enhance the toctree HTML with collapsible controls using <details> and <summary>."""
    soup = BeautifulSoup(toctree_html, "html.parser")

    for item in soup.select("li:has(ul)"):
        details = soup.new_tag("details")
        if "current" in item.get("class", []):
            details["open"] = ""
        details.append(soup.new_tag("summary"))
        details.append(item.find("ul").extract())
        item.append(details)

    return str(soup)
