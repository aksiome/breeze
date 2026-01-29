# 🌐 Language switcher

Enable users to switch between different language versions of your documentation.

## Configuration

Configure available languages via `html_context` in `conf.py`:

```python
html_context = {
    "languages": [
        ("English", "/en/latest/%s/", "en"),
        ("Français", "/fr/latest/%s/", "fr"),
        ("中文", "/zh/latest/%s/", "zh"),
    ],
}
```

Each tuple contains:

| Index | Description |
|-------|-------------|
| 0 | Display name shown in dropdown |
| 1 | URL pattern with `%s` placeholder for current page path |
| 2 | Language code (matches Sphinx `language` setting) |

## URL pattern

The `%s` placeholder is replaced with the current page path. For example, if the user is on `/en/latest/guide/install/` and switches to French:

- Pattern: `/fr/latest/%s/`
- Result: `/fr/latest/guide/install/`

## Read the Docs integration

For Read the Docs hosted documentation, use environment variables for dynamic versioning:

```python
import os

version = os.environ.get("READTHEDOCS_VERSION", "latest")

html_context = {
    "languages": [
        ("English", f"/en/{version}/%s/", "en"),
        ("Français", f"/fr/{version}/%s/", "fr"),
    ],
}
```

## Sphinx internationalization

The language switcher works with Sphinx's built-in internationalization. Set up translations using:

1. Extract messages: `sphinx-build -b gettext docs docs/_build/gettext`
2. Create translation files with `sphinx-intl`
3. Build each language version separately

See the [Sphinx internationalization guide](https://www.sphinx-doc.org/en/master/usage/advanced/intl.html) for details.

## Styling

Customize the switcher appearance:

```css
:root {
  --bz-lang-switcher-color: var(--bz-link-color);
  --bz-lang-switcher-color-hover: var(--bz-link-color-hover);
  --bz-lang-switcher-font-size: 1rem;
}
```
