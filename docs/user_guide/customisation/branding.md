# 🔖 Branding and logo

Customize your documentation's logo, title, and favicon.

## Logo

Set your logo using the standard Sphinx `html_logo` option in `conf.py`:

```python
html_logo = "_static/logo.png"
```

The logo appears in the header alongside your site title.

### Light and dark logos

Use different logos for light and dark themes via `html_theme_options`:

```python
html_theme_options = {
    "light_logo": "logo-light.png",
    "dark_logo": "logo-dark.png",
}
```

| Option | Description |
|--------|-------------|
| `light_logo` | Logo shown in light mode |
| `dark_logo` | Logo shown in dark mode |

Both options support local paths (relative to `_static/`) or full URLs.
If only one is set, the other falls back to `html_logo`.

## Site Title

Set the site title with `html_title`:

```python
html_title = "My Project"
```

The title appears next to the logo in the header and is used as the default page title suffix.

## Favicon

Add a favicon with `html_favicon`:

```python
html_favicon = "_static/favicon.ico"
```

Supported formats: `.ico`, `.png`, `.svg`.

## Brand Typography

Customize the brand font family with CSS:

```css
:root {
  --bz-font-brand: "Inter", sans-serif;
}
```

## Header Brand Styling

Additional CSS variables for the header brand:

```css
:root {
  --bz-header-brand-font-size: 1.75rem;
  --bz-header-brand-color: var(--bz-header-color);
  --bz-header-brand-color-hover: var(--bz-link-color-hover);
  --bz-header-brand-font-family: var(--bz-font-brand);
}
```
