# 📱 Layout and components

Breeze provides a flexible layout system with configurable component slots.

## Layout structure

The page layout consists of these main regions:

```
┌─────────────────────────────────────────────────────┐
│                   announcement                      │
├─────────────────────────────────────────────────────┤
│  header start           │           header end      │
├─────────────────────────────────────────────────────┤
│                    header tabs                      │
├──────────┬──────────────────────────────┬───────────┤
│          │        article header        │           │
│ sidebar  │                              │  sidebar  │
│ primary  │          content             │ secondary │
│          │                              │           │
│          │        article footer        │           │
├──────────┴──────────────────────────────┴───────────┤
│                       footer                        │
└─────────────────────────────────────────────────────┘
```

## Component slots

Configure which components appear in each slot via `html_theme_options`:

```python
html_theme_options = {
    "header_start": ["header-brand.html", "version-switcher.html"],
    "header_end": ["search-button.html", "theme-switcher.html"],
    "sidebar_primary": ["sidebar-nav.html"],
    "sidebar_secondary": ["sidebar-toc.html", "edit-this-page.html"],
    "article_header": ["breadcrumbs.html"],
    "article_footer": ["related-pages.html"],
    "footer": ["footer-copyright.html"],
}
```

### Available components

| Component | Description |
|-----------|-------------|
| `header-brand.html` | Logo and site title |
| `version-switcher.html` | Documentation version dropdown |
| `search-button.html` | Search trigger button |
| `lang-switcher.html` | Language selector dropdown |
| `theme-switcher.html` | Light/dark mode toggle |
| `external-links.html` | External link buttons |
| `sidebar-nav.html` | Main navigation tree |
| `sidebar-toc.html` | Page table of contents |
| `sidebar-ethical-ads.html` | Read the Docs ads placeholder |
| `edit-this-page.html` | Edit on GitHub/GitLab link |
| `breadcrumbs.html` | Breadcrumb navigation |
| `related-pages.html` | Previous/next page links |
| `footer-copyright.html` | Copyright notice |

## Page-level options

Control layout per-page using file frontmatter (MyST) or meta directive (RST).

### Hide sections

::::{tab-set}
:::{tab-item} MyST
```yaml
---
hide-sidebar-primary: true
hide-sidebar-secondary: true
hide-header-tabs: true
---
```
:::
:::{tab-item} RST
```rst
:hide-sidebar-primary: true
:hide-sidebar-secondary: true
:hide-header-tabs: true
```
:::
::::

### Hide components

Hide specific components on individual pages:

::::{tab-set}
:::{tab-item} MyST
```yaml
---
hide-breadcrumbs: true
hide-related-pages: true
---
```
:::
:::{tab-item} RST
```rst
:hide-breadcrumbs: true
:hide-related-pages: true
```
:::
::::

### Custom content width

Set a custom maximum width for page content:

::::{tab-set}
:::{tab-item} MyST
```yaml
---
content-width: 50rem
---
```
:::
:::{tab-item} RST
```rst
:content-width: 50rem
```
:::
::::

## Header tabs

Enable or disable header navigation tabs:

```python
html_theme_options = {
    "header_tabs": True,  # default
}
```

When enabled, top-level toctree entries appear as tabs in the header.

## Emoji handling

Control emoji display in different areas:

```python
html_theme_options = {
    "emojis_title": False,        # Page titles
    "emojis_header_nav": False,   # Header navigation
    "emojis_sidebar_nav": True,   # Sidebar navigation
    "emojis_sidebar_toc": False,  # Table of contents
}
```

```{toctree}
:hidden:
:glob:

components/*
```
