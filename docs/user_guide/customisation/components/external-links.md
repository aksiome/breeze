# 🔗 External links

Add custom external link buttons to the header and footer.

## Configuration

Configure external links via `html_theme_options` in `conf.py`:
```python
html_theme_options = {
    "external_links": [
        "https://github.com/user/repo",
        "https://pypi.org/project/my-package/",
        {
            "name": "Custom Link",
            "url": "https://example.com",
            "icon": "beaker"
        },
    ],
}
```

## Link formats

External links support two formats:

### Simple URL string

For recognized domains, just provide the URL:
```python
html_theme_options = {
    "external_links": [
        "https://github.com/user/repo",
        "https://pypi.org/project/my-package/",
    ],
}
```

The name and icon are automatically inferred from the domain.

### Dictionary object

For custom links or to override defaults, use a dictionary:
```python
html_theme_options = {
    "external_links": [
        {
            "url": "https://example.com",
            "name": "Example Site",
            "icon": "beaker",
            "html": "<svg>...</svg>"
        },
    ],
}
```

| Key | Required | Description |
|-----|----------|-------------|
| `url` | Yes | Link destination |
| `name` | No | Link label (shown in tooltip). Auto-detected for known domains. |
| `icon` | No | Icon name from [Simple Icons](https://simpleicons.org/) or [Octicons](https://primer.style/foundations/icons). Auto-detected for known domains. |
| `html` | No | Custom HTML to replace the generated icon entirely |

## Recognized domains

These domains automatically get appropriate names and icons:

- **Code hosting**: GitHub, GitLab, Bitbucket
- **Package registries**: PyPI, npm, crates.io, Packagist, RubyGems, NuGet, Maven Central, Maven Repository
- **Documentation**: Read the Docs, docs.rs, GitBook, GitHub Pages
- **Social media**: YouTube, Facebook, Instagram, Reddit, TikTok, Twitch, Snapchat, X (Twitter)
- **Community**: Discord, Telegram, Gitter, Stack Overflow, Medium
- **Funding**: Patreon, Open Collective, Ko-fi, Buy Me a Coffee

## Custom icons

### Using icon libraries

Breeze supports icons from [Simple Icons](https://simpleicons.org/) and [Octicons](https://primer.style/octicons/):
```python
{
    "name": "My Blog",
    "url": "https://myblog.com",
    "icon": "rss"
}
```

### Custom SVG

Provide your own SVG via the `html` key:
```python
{
    "name": "Custom",
    "url": "https://example.com",
    "html": """
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7z"/>
      </svg>
    """
}
```

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
