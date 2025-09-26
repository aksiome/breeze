# 🚀 Quickstart

This is a short step-by-step tutorial to get started with the Sphinx Breeze Theme.

## Installation

Install Breeze from [PyPI](https://pypi.org/project/sphinx-breeze-theme/):

::::{tab-set}
:::{tab-item} pip
```bash
pip install sphinx-breeze-theme
```
:::
:::{tab-item} uv
```bash
uv add --dev sphinx-breeze-theme
```
:::
::::

```{hint}
If you're new to Sphinx, we recommend reading the
[official tutorial](https://www.sphinx-doc.org/en/master/tutorial/)
for a solid understanding of the platform and its features.
```

## Using Breeze

:::{note}
This documentation and the examples are written with MyST Markdown, a form
of markdown that works with Sphinx. For more information about MyST markdown, and
to use MyST markdown with your Sphinx website,
see [the MyST-parser documentation](https://myst-parser.readthedocs.io/)
:::

Here’s a typical Sphinx docs setup. You can start from this layout and adapt it to your project.

:::::{grid} 1 2 2 2
::::{grid-item}
:columns: 12 6 5 4

:::{treeview}
- [+] {dir}`folder` <my_project>
  - [+] {dir}`folder` docs
    - {dir}`folder` _static
    - {dir}`folder` _templates
    - {dir}`file` conf.py
    - {dir}`file` index.md
    - {dir}`file` ...
  - {dir}`file` .readthedocs.yml
  - {dir}`file` pyproject.toml
  - {dir}`file` ...
:::
::::
::::{grid-item}
:columns: 12 6 7 8

- **conf.py** — sphinx configuration
- **index.md** — your documentation homepage
- **_static/** (optional) — for static files
- **_templates/** (optional) — for templates

Enable the theme by updating `html_theme` in `conf.py`.

:::{code-block} python
:caption: conf.py
html_theme = "breeze"
...
:::
::::
:::::

Your documentation is now styled with Breeze!  
