# 📱 Theme Layout

Breeze provides a flexible layout system with configurable component slots.

## Layout structure

The page layout consists of these main regions:

::::{grid} 12
:gutter: 2
:class-container: sd-text-center

:::{grid-item-card}
:columns: 6

`header_start`
:::

:::{grid-item-card}
:columns: 6

`header_end`
:::

:::{grid-item-card}
:columns: 12

`header_tabs`
:::

:::{grid-item-card}
:columns: 4

`sidebar_primary`
:::

:::{grid-item-card}
:columns: 4

`article_header`

**content**

`article_footer`
:::

:::{grid-item-card}
:columns: 4

`sidebar_secondary`
:::

:::{grid-item-card}
:columns: 12

`footer`
:::
::::

## Component slots

Configure which components appear in each slot via `html_theme_options`:

```python
html_theme_options = {
    "header_start": ["header-brand.html", "version-switcher.html"],
    "header_end": ["search-button.html", "theme-switcher.html"],
    "sidebar_primary": ["sidebar-nav.html"],
    "sidebar_secondary": ["sidebar-toc.html", "repo-stats.html", "edit-this-page.html", "sidebar-ethical-ads.html"],
    "article_header": ["breadcrumbs.html"],
    "article_footer": ["related-pages.html"],
    "footer": ["footer-copyright.html"],
}
```

:::{note}
Components are often designed for a **specific layout slot** and may rely on
the surrounding structure, spacing, or behavior of that slot.

If a component does not work as expected when placed in a different slot,
this does not necessarily indicate a bug.  
If you believe a component *should* be usable in another slot, please open an
issue to discuss the intended usage.
:::

### Available components

| Component | Description |
|-----------|-------------|
| `breadcrumbs.html` | Breadcrumb navigation |
| [`edit-this-page.html`](components/edit-this-page.md) | Edit on GitHub/GitLab link |
| [`external-links.html`](components/external-links.md) | External link buttons |
| `footer-copyright.html` | Copyright notice |
| `header-brand.html` | Logo and site title |
| [`lang-switcher.html`](components/lang-switcher.md) | Language selector dropdown |
| `related-pages.html` | Previous/next page links |
| [`repo-stats.html`](components/repo-stats.md) | Repository stars and forks |
| `search-button.html` | Search trigger button |
| `sidebar-ethical-ads.html` | Read the Docs ads placeholder |
| `sidebar-nav.html` | Main navigation tree |
| `sidebar-toc.html` | Page table of contents |
| `theme-switcher.html` | Light/dark mode toggle |
| [`version-switcher.html`](components/version-switcher.md) | Documentation version dropdown |


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
    "emojis_title": False,        # Page titles (navigator tab)
    "emojis_header_nav": False,   # Header navigation
    "emojis_sidebar_nav": False,  # Sidebar navigation
    "emojis_sidebar_toc": False,  # Table of contents
}
```

```{toctree}
:hidden:
:glob:

components/*
```
