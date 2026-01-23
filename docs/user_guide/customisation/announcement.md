# 🪧 Announcement

Display an announcement banner at the top of every page to highlight important information.

## Configuration

Add an announcement via `html_theme_options` in your `conf.py`:

```python
html_theme_options = {
    "announcement": "This documentation is for version 2.0. <a href='/v1/'>See v1 docs</a>.",
}
```

The announcement supports HTML, so you can include links, formatting, and other elements.

## Styling

Customize the banner appearance with CSS variables:

```css
:root {
  --bz-announcement-color: var(--bz-color-white);
  --bz-announcement-background-color: var(--bz-color-secondary);
  --bz-announcement-font-size: inherit;
  --bz-announcement-font-family: inherit;
}
```
