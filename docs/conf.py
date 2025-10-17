"""Configuration file for the Sphinx documentation builder."""

import os

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = "Breeze"
copyright = "2025, Aksiome"
author = "Aksiome"

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
    # Sphinx's own extensions
    "sphinx.ext.autodoc",
    "sphinx.ext.extlinks",
    "sphinx.ext.intersphinx",
    "sphinx.ext.mathjax",
    "sphinx.ext.todo",
    "sphinx.ext.viewcode",
    # External stuff
    "myst_parser",
    "sphinx_copybutton",
    "sphinx_design",
    "sphinx_treeview",
]

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
html_logo = "_static/breeze.png"

support_icon = """
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512">
    <path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
</svg>
"""

html_theme_options = {
    "external_links": [
        {
            "name": "Support me",
            "url": "https://github.com/sponsors/aksiome",
            "html": support_icon,
        },
    ]
}

# -- Options for theme development -------------------------------------------

version = os.environ.get("READTHEDOCS_VERSION", "latest")

html_css_files = []
html_js_files = []
html_static_path = []
html_context = {
    "github_user": "aksiome",
    "github_repo": "breeze",
    "github_version": "main",
    "doc_path": "docs",
    "current_version": version,
    "version_switcher": "https://raw.githubusercontent.com/aksiome/breeze/refs/heads/main/docs/_static/switcher.json",
    "languages": [
        ("English", f"/en/{version}/%s/", "en"),
        ("Français", f"/fr/{version}/%s/", "fr"),
        ("中文", f"/zh/{version}/%s/", "zh"),
    ],
}
