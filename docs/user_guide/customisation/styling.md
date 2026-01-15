# 🎨 CSS theme variables

Breeze uses CSS custom variables for styling, making it easy to customize colors, typography, and component appearance.

## Configuration

Create a custom CSS file and add it to your Sphinx configuration:

```python
html_static_path = ["_static"]
html_css_files = ["custom.css"]
```

Then override variables in `_static/custom.css`:

```css
:root {
  --bz-color-primary: #10b981;
}
```

## Theme colors

### Base colors

Breeze uses the OKLCH color space for perceptually uniform colors:

| Variable | Default |
|----------|---------|
| `--bz-color-primary` | Blue (`--bz-color-blue`) |
| `--bz-color-secondary` | Purple (`--bz-color-purple`) |

### Color palette

Each base color has 5 shade variants (`-1` darkest to `-5` lightest):

```css
--bz-color-blue-1  /* darkest */
--bz-color-blue-2
--bz-color-blue-3  /* base (same as --bz-color-blue) */
--bz-color-blue-4
--bz-color-blue-5  /* lightest */
```

Available colors: `black`, `blue`, `brown`, `cyan`, `gray`, `green`, `magenta`, `orange`, `purple`, `red`, `white`, `yellow`.

### Dark mode

Dark mode overrides are applied automatically when `data-theme="dark"`. To customize dark mode specifically:

```css
:root[data-theme="dark"] {
  --bz-color-primary: #60a5fa;
}
```

## Typography

### Font families

| Variable | Purpose |
|----------|---------|
| `--bz-font-brand` | Logo/brand text |
| `--bz-font-sans` | Body text |
| `--bz-font-mono` | Code blocks |

## Syntax highlighting

Configure Pygments styles for light and dark modes in `conf.py`:

```python
pygments_light_style = "a11y-high-contrast-light"
pygments_dark_style = "github-dark-high-contrast"
```

See [Pygments styles](https://pygments.org/styles/) and [accessible-pygments](https://github.com/Quansight-Labs/accessible-pygments) for available options.


## Additional variables

To view all available variables, inspect the following files (these variables are not considered stable and may change):

- [colors.css](https://github.com/aksiome/breeze/blob/main/src/sphinx_breeze_theme/assets/styles/variables/colors.css)
- [content.css](https://github.com/aksiome/breeze/blob/main/src/sphinx_breeze_theme/assets/styles/variables/content.css)
- [fonts.css](https://github.com/aksiome/breeze/blob/main/src/sphinx_breeze_theme/assets/styles/variables/fonts.css)
- [icons.css](https://github.com/aksiome/breeze/blob/main/src/sphinx_breeze_theme/assets/styles/variables/icons.css)
