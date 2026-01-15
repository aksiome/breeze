# 🔗 External links

Add custom external link buttons to the header and footer.

## Configuration

Configure external links via `html_theme_options` in `conf.py`:

```python
html_theme_options = {
    "external_links": [
        {
            "name": "PyPI",
            "url": "https://pypi.org/project/my-package/",
        },
    ],
}
```

Each link object accepts:

| Key | Description |
|-----|-------------|
| `name` | Link label (shown in tooltip) |
| `url` | Link destination |
| `html` | Custom SVG icon |

## Custom icons

Provide a custom SVG icon via the `html` key:

```python
discord_icon = """
<svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515..."/>
</svg>
"""

html_theme_options = {
    "external_links": [
        {
            "name": "Discord",
            "url": "https://discord.gg/example",
            "html": discord_icon,
        },
    ],
}
```

## Github link

When `github_user` and `github_repo` are set in `html_context`, a GitHub link is automatically added:

```python
html_context = {
    "github_user": "myorg",
    "github_repo": "myproject",
}
```

To disable the automatic GitHub link, set either value to `"None"`.

## Styling

Customize appearance with CSS variables:

```css
:root {
  --bz-external-links-color: var(--bz-link-color);
  --bz-external-links-color-hover: var(--bz-link-color-hover);
  --bz-external-links-font-size: inherit;
  --bz-external-links-font-family: inherit;
}
```
