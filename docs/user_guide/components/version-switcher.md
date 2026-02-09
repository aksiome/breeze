# 🏷️ Version switcher

Enable users to switch between different versions of your documentation.

## Configuration

Configure the version switcher via `html_context` in `conf.py`:

```python
html_context = {
    "version_id": "v2.0",
    "version_switcher_url": "https://example.com/docs/_static/switcher.json",
}
```

| Key | Description |
|-----|-------------|
| `version_id` | The currently displayed version |
| `version_switcher_url` | URL to the JSON file containing version data |

## Version JSON format

Create a `switcher.json` file with your available versions:

```json
[
  {
    "name": "v2.0 (stable)",
    "version": "stable",
    "url": "/en/stable/",
    "preferred": true
  },
  {
    "name": "v2.1 (latest)",
    "version": "latest",
    "url": "/en/latest/"
  },
  {
    "name": "v1.0",
    "version": "v1.0",
    "url": "/en/v1.0/"
  }
]
```

Each version object accepts:

| Key | Description |
|-----|-------------|
| `name` | Display name in dropdown |
| `version` | Version identifier (matches `version_id`) |
| `url` | Base URL for this version |
| `preferred` | Optional. Mark as the recommended version |

## Read the Docs integration

For Read the Docs, use environment variables:

```python
import os

version_id = os.environ.get("READTHEDOCS_VERSION", "latest")

html_context = {
    "version_id": version_id,
    "version_switcher_url": "https://raw.githubusercontent.com/org/repo/main/docs/_static/switcher.json",
}
```

## Hosting the JSON file

The `switcher.json` can be:

1. **In your repository** - Served via GitHub raw URLs or your documentation static files
2. **External URL** - Any publicly accessible JSON endpoint

For GitHub-hosted projects:

```python
html_context = {
    "version_switcher_url": "https://raw.githubusercontent.com/org/repo/main/docs/_static/switcher.json",
}
```

## Styling

Customize the switcher appearance:

```css
:root {
  --bz-version-switcher-color: var(--bz-color-muted);
  --bz-version-switcher-border-color: var(--bz-color-outline);
  --bz-version-switcher-border-color-hover: var(--bz-color-primary);
  --bz-version-switcher-background-color: var(--bz-color-surface-2);
  --bz-version-switcher-font-size: var(--bz-size-xs);
  --bz-version-switcher-font-family: inherit;
}
```
