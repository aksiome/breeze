"""Configuration file for the Sphinx documentation builder."""

import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "_code"))

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "Breeze"
copyright = "%Y, Aksiome"
author = "Aksiome"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    # Sphinx's own extensions
    "sphinx.ext.autodoc",
    "sphinx.ext.autosummary",
    "sphinx.ext.extlinks",
    "sphinx.ext.intersphinx",
    "sphinx.ext.mathjax",
    "sphinx.ext.napoleon",
    "sphinx.ext.todo",
    "sphinx.ext.viewcode",
    # External stuff
    "click_extra.sphinx",
    "jupyter_sphinx",
    "myst_parser",
    "nbsphinx",
    "sphinx_click",
    "sphinx_contributors",
    "sphinx_copybutton",
    "sphinx_datatables",
    "sphinx_design",
    "sphinx_docsearch",
    "sphinx_sitemap",
    "sphinx_togglebutton",
    "sphinx_treeview",
    "sphinxcontrib.jquery",
    "sphinxcontrib.mermaid",
    "sphinxcontrib.video",
    "sphinxcontrib.youtube",
]

docsearch_app_id = "LYBKXP1U1X"
docsearch_api_key = "fa3393543a6155addafd0fbd2e63c366"
docsearch_index_name = "Sphinx Breeze Theme Documentation"

nbsphinx_requirejs_path = ""
jupyter_sphinx_require_url = ""


# -- Options for Markdown files ----------------------------------------------
# https://myst-parser.readthedocs.io/en/latest/sphinx/reference.html

myst_enable_extensions = [
    "colon_fence",
    "deflist",
    "fieldlist",
    "substitution",
]
myst_heading_anchors = 3
todo_include_todos = True

# -- Sphinx-copybutton options -----------------------------------------------
# Exclude copy button from appearing over notebook cell numbers by using :not()
# The default copybutton selector is `div.highlight pre`
# https://github.com/executablebooks/sphinx-copybutton/blob/master/sphinx_copybutton/__init__.py#L82

copybutton_exclude = ".linenos, .gp"
copybutton_selector = ":not(.prompt) > div.highlight pre"

# -- Options for internationalization ----------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-internationalization

language = "en"

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = "breeze"
html_title = "Breeze"
html_logo = "_static/logo.png"
html_favicon = "_static/logo.png"
html_baseurl = "https://sphinx-breeze-theme.readthedocs.io/"

html_theme_options = {
    "external_links": [
        {
            "name": "Support me",
            "url": "https://github.com/sponsors/aksiome",
            "icon": "heart-fill",
        },
        "https://github.com/aksiome/breeze",
    ]
}

# -- Options for theme development -------------------------------------------

version_slug = os.environ.get("READTHEDOCS_VERSION", "latest")

templates_path = ["_templates"]

html_css_files = []
html_js_files = []
html_static_path = []
html_context = {
    "github_user": "aksiome",
    "github_repo": "breeze",
    "github_version": "main",
    "doc_path": "docs",
    "version_slug": version_slug,
    "version_switcher_url": "https://raw.githubusercontent.com/aksiome/breeze/refs/heads/main/docs/_static/switcher.json",
    "languages": [
        ("English", f"/en/{version_slug}/%s/", "en"),
        ("Français", f"/fr/{version_slug}/%s/", "fr"),
        ("中文", f"/zh/{version_slug}/%s/", "zh"),
    ],
}
