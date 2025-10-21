"""A modern Sphinx documentation theme."""

__version__ = "0.2.2"

from os import environ
from pathlib import Path
from typing import Any

from emoji import replace_emoji
from docutils import nodes
from sphinx.application import Sphinx
from sphinx.builders.dirhtml import DirectoryHTMLBuilder

from sphinx_breeze_theme import links, pygments, toctree, utils

THEME_PATH = (Path(__file__).parent / "theme" / "breeze").resolve()


def setup(app: Sphinx) -> dict[str, Any]:
    """Entry point for sphinx theming."""
    app.require_sphinx("8.2")

    app.setup_extension("sphinxext.opengraph")

    app.add_config_value(
        "pygments_dark_style",
        default="github-dark-high-contrast",
        rebuild="env",
        types=[str],
    )
    app.add_config_value(
        "pygments_light_style",
        default="a11y-high-contrast-light",
        rebuild="env",
        types=[str],
    )

    app.add_html_theme("breeze", str(THEME_PATH))
    app.add_css_file("styles/breeze.css", 700)
    app.add_js_file("scripts/breeze.js", 700, "defer")

    app.add_post_transform(utils.TableWrapper)

    app.connect("builder-inited", on_builder_inited)
    app.connect("build-finished", on_build_finished)
    app.connect("html-page-context", on_html_page_context)

    app.config.templates_path.append(str(THEME_PATH / "components"))

    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
        "version": __version__,
    }


def on_builder_inited(app: Sphinx) -> None:
    utils.set_default_config(app, "html_permalinks_icon", "#")
    utils.set_default_config(app, "python_maximum_signature_line_length", 60)


def on_build_finished(app: Sphinx, exception=None) -> None:
    if exception is None:
        pygments.overwrite_pygments_css(app)


def on_html_page_context(
    app: Sphinx,
    pagename: str,
    templatename: str,
    context: dict[str, Any],
    doctree: nodes.document,
) -> None:
    toc = utils.simplify_page_toc(context.get("toc", ""))
    context["toc"] = utils.insert_zero_width_space(toc)
    context["toctree"] = toctree.create_custom_toctree(app, pagename)
    context["js_tag"] = utils.replace_js_tag(context["js_tag"])
    context["edit_link"] = links.create_edit_link(pagename, context)
    context["lang_link"] = links.create_lang_link(pagename)
    context["replace_emoji"] = replace_emoji
    context["wrap_emoji"] = utils.wrap_emoji

    # Inject all the Read the Docs environment variables in the context:
    # https://docs.readthedocs.io/en/stable/reference/environment-variables.html
    context['READTHEDOCS'] = environ.get("READTHEDOCS", False) == "True"
    if context['READTHEDOCS']:
        for key, value in environ.items():
            if key.startswith("READTHEDOCS_"):
                context[key] = value

    # Remove a duplicate entry of the theme CSS
    css_files = context.get("css_files", [])
    for i, asset in enumerate(css_files):
        asset_path = getattr(asset, "filename", str(asset))
        if asset_path.endswith("sphinx-breeze-theme.css"):
            del css_files[i]
            break

    # Fix the canonical URL when using the dirhtml builder
    if (
        app.config.html_baseurl
        and isinstance(app.builder, DirectoryHTMLBuilder)
        and context["pageurl"]
        and context["pageurl"].endswith(".html")
    ):
        target = app.builder.get_target_uri(pagename)
        context["pageurl"] = app.config.html_baseurl + target

    for section in [
        "theme_header_start",
        "theme_header_end",
        "theme_sidebar_primary",
        "theme_sidebar_secondary",
        "theme_article_header",
        "theme_article_footer",
        "theme_footer"
    ]:
        templates = context.get(section, []) or []
        context[section] = [
            template.strip()
            for template in templates.split(",")
        ] if isinstance(templates, str) else templates
