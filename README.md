<p align="center">
  <img src="https://raw.githubusercontent.com/aksiome/breeze/refs/heads/main/docs/_static/logo.png" alt="Breeze" width="100" height="100">
</p>

<h1 align="center">Sphinx Breeze Theme</h1>

<p align="center">
  <strong>A clean and modern Sphinx theme with polished API docs</strong>
</p>

<p align="center">
  <a href="https://pypi.org/project/sphinx-breeze-theme/"><img src="https://img.shields.io/pypi/v/sphinx-breeze-theme?logo=python&amp;color=blue&amp;logoColor=white&amp;label=PyPI" alt="PyPI version"></a>
  <a href="https://sphinx-breeze-theme.readthedocs.io/"><img src="https://img.shields.io/readthedocs/sphinx-breeze-theme?logo=readthedocs&amp;logoColor=white" alt="Documentation"></a>
  <a href="https://pypistats.org/packages/sphinx-breeze-theme"><img src="https://img.shields.io/pypi/dm/sphinx-breeze-theme.svg?color=yellow" alt="Downloads"/></a>
  <a href="https://github.com/aksiome/breeze/blob/main/LICENSE"><img src="https://img.shields.io/pypi/l/sphinx-breeze-theme" alt="License"></a>
</p>

<p align="center">
  <a href="https://sphinx-breeze-theme.readthedocs.io/">Live Demo</a> ·
  <a href="https://sphinx-breeze-theme.readthedocs.io/en/stable/user_guide/quickstart.html">Get Started</a> ·
  <a href="https://sphinx-breeze-theme.readthedocs.io/en/stable/kitchen-sink/">Kitchen Sink</a>
</p>

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/aksiome/breeze/refs/heads/main/docs/_static/screenshot-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/aksiome/breeze/refs/heads/main/docs/_static/screenshot-light.png">
    <img alt="Breeze theme screenshot" src="https://raw.githubusercontent.com/aksiome/breeze/refs/heads/main/docs/_static/screenshot-light.png">
  </picture>
</p>


## Why Breeze?

- **Clear and readable** — Tuned typography and spacing that lets your content breathe
- **Polished API docs** — First-class autodoc styling that's easy to navigate
- **Accessible** — WCAG-friendly colors and syntax highlighting out of the box
- **Adaptive** — Works on any device with light & dark themes
- **Built to scale** — Multiple layouts, built-in components, and flexible customization

## Installation

Requires Python 3.10+ and Sphinx 8.0+.

```bash
pip install sphinx-breeze-theme
```

## Quickstart

Add to your `conf.py`:

```python
html_theme = "breeze"
```

That's it! For customization options, see the [documentation](https://sphinx-breeze-theme.readthedocs.io/).

## Acknowledgements

Breeze draws inspiration from other great projects:

- [PyData Sphinx Theme](https://github.com/pydata/pydata-sphinx-theme) — Three-column layout with toctree tabs in the header
- [Material for MkDocs](https://github.com/squidfunk/mkdocs-material) — Overall aesthetic and modern visual direction
- [Shibuya](https://github.com/lepture/shibuya) — Polish, extension support ideas, and configuration patterns
- [VitePress](https://github.com/vuejs/vitepress) — UI component inspiration
- [Furo](https://github.com/pradyunsg/furo) — Implementation reference for Sphinx code
- [Lutra](https://github.com/pradyunsg/lutra) — A three-column theme that inspired this project

This project is tested with BrowserStack. Shoutout to them for supporting OSS projects!

## License

This project is licensed under the [MPL-2.0](LICENSE) License.
