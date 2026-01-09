# Breeze - A Modern Sphinx Theme

A modern Sphinx theme built with TypeScript and Vite. 



[demo](https://sphinx-breeze-theme.readthedocs.io/en/stable/)

## Installation

Install Breeze from [PyPI](https://pypi.org/project/sphinx-breeze-theme/):

pip
```bash
pip install sphinx-breeze-theme
```

uv
```bash
uv add --dev sphinx-breeze-theme
```

## Setup

Update ``conf.py``:
```python
html_theme = "breeze"
```

Customise header:
```python
html_context = {
    "github_user": "aksiome",
    "github_repo": "breeze",
    ...
}
```

## Documentation

- official sphinx [tutorial](https://www.sphinx-doc.org/en/master/tutorial/)
- MyST markdown [documentation](https://myst-parser.readthedocs.io/)
