# 🌗 Light and dark mode

Breeze supports light and dark themes with automatic system preference detection.

## Default mode

Set the default theme mode via `html_theme_options` in `conf.py`:

```python
html_theme_options = {
    "default_mode": "auto",  # "auto", "light", or "dark"
}
```

| Value | Behavior |
|-------|----------|
| `auto` | Follows system preference (default) |
| `light` | Always starts in light mode |
| `dark` | Always starts in dark mode |

Users can override this using the theme switcher, which saves their preference to localStorage.

## Theme-specific content

Use the `.only-light` and `.only-dark` utility classes to show or hide content based on the active theme.

See [Markup](../markup.md#theme-visibility) for usage examples.
