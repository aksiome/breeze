"""A modern Sphinx documentation theme."""

__version__ = "0.12.0"

from os import environ
from pathlib import Path
from typing import Any

from emoji import replace_emoji
from docutils import nodes
from sphinx.application import Sphinx
from sphinx.builders.dirhtml import DirectoryHTMLBuilder

from sphinx_breeze_theme import icons, links, pygments, toctree, utils
from sphinx_breeze_theme import opengraph  # noqa: F401  # monkey-patches sphinxext.opengraph

THEME_PATH = (Path(__file__).parent / "theme" / "breeze").resolve()


def setup(app: Sphinx) -> dict[str, Any]:
    """Entry point for sphinx theming."""
    app.require_sphinx("8.0")

    app.setup_extension("sphinxext.opengraph")

    app.add_html_theme("breeze", str(THEME_PATH))
    app.add_css_file("styles/breeze.css", 900)
    app.add_js_file("scripts/breeze.js", 900, "defer")

    for name, default in [
        ("pygments_dark_style", "github-dark-high-contrast"),
        ("pygments_light_style", "a11y-high-contrast-light"),
    ]:
        app.add_config_value(name, default, "env", [str])

    app.add_post_transform(utils.TableWrapper)

    app.connect("builder-inited", _on_builder_inited)
    app.connect("html-page-context", _on_html_page_context)
    app.connect("build-finished", _on_build_finished)

    app.config.templates_path.append(str(THEME_PATH / "components"))

    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
        "version": __version__,
    }


def _on_builder_inited(app: Sphinx) -> None:
    utils.set_default_config(app, "html_permalinks_icon", "#")
    utils.set_default_config(app, "python_maximum_signature_line_length", 60)
    opts = app.config.html_theme_options
    opts["external_links"] = links.process_links(opts.get("external_links", []))


def _on_html_page_context(
    app: Sphinx,
    pagename: str,
    templatename: str,
    context: dict[str, Any],
    doctree: nodes.document,
) -> None:
    # Enhance table of contents
    toc = utils.simplify_page_toc(context.get("toc", ""))
    context["toc"] = utils.insert_zero_width_space(toc)

    # Add navigation and link helpers
    context["toctree"] = toctree.create_custom_toctree(app, pagename)
    context["edit_link"] = links.create_edit_link(pagename, context)
    context["lang_link"] = links.create_lang_link(pagename)

    # Add template utilities
    context["icon"] = icons.render_icon
    context["wrap_emoji"] = utils.wrap_emoji
    context["replace_emoji"] = replace_emoji

    # Strip emojis from title unless explicitly enabled
    if context.get("title") and context.get("theme_emojis_title", "").lower() != "true":
        context["title"] = replace_emoji(context["title"]).strip()

    _fix_dirhtml_canonical_url(app, pagename, context)
    _inject_readthedocs_env(context)
    _parse_template_slots(context)
    _remove_duplicate_css(context)


def _on_build_finished(app: Sphinx, exception: Exception | None = None) -> None:
    if exception is None:
        pygments.overwrite_pygments_css(app)


def _fix_dirhtml_canonical_url(
    app: Sphinx, pagename: str, context: dict[str, Any]
) -> None:
    """Fix canonical URL when using the dirhtml builder.

    The dirhtml builder generates URLs ending in .html for pageurl,
    but the actual URLs should match the directory structure.
    """
    if (
        app.config.html_baseurl
        and isinstance(app.builder, DirectoryHTMLBuilder)
        and context["pageurl"]
        and context["pageurl"].endswith(".html")
    ):
        target = app.builder.get_target_uri(pagename)
        context["pageurl"] = app.config.html_baseurl + target


def _inject_readthedocs_env(context: dict[str, Any]) -> None:
    """Inject Read the Docs environment variables into the template context.

    See: https://docs.readthedocs.io/en/stable/reference/environment-variables.html
    """
    context["READTHEDOCS"] = environ.get("READTHEDOCS", False) == "True"
    if context["READTHEDOCS"]:
        for key, value in environ.items():
            if key.startswith("READTHEDOCS_"):
                context[key] = value


def _parse_template_slots(context: dict[str, Any]) -> None:
    """Parse comma-separated template slot strings into lists.

    Theme options like header_start can be specified as comma-separated
    strings in conf.py. This converts them to lists for template iteration.
    """
    slot_names = [
        "theme_article_footer",
        "theme_article_header",
        "theme_footer",
        "theme_header_end",
        "theme_header_start",
        "theme_sidebar_primary",
        "theme_sidebar_secondary",
    ]

    for slot in slot_names:
        templates = context.get(slot, []) or []
        context[slot] = (
            [template.strip() for template in templates.split(",")]
            if isinstance(templates, str)
            else templates
        )


def _remove_duplicate_css(context: dict[str, Any]) -> None:
    """Remove duplicate theme CSS file entry added by Sphinx."""
    css_files = context.get("css_files", [])
    for i, asset in enumerate(css_files):
        asset_path = getattr(asset, "filename", str(asset))
        if asset_path.endswith("sphinx-breeze-theme.css"):
            del css_files[i]
            break
