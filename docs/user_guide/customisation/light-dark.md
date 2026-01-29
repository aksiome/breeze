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

Use CSS classes to show or hide content based on the active theme.

### Only in dark mode

::::{tab-set}
:::{tab-item} MyST
````
```{image} logo-dark.png
:class: only-dark
```
````
:::
:::{tab-item} RST
```rst
.. image:: logo-dark.png
   :class: only-dark
```
:::
::::

### Only in light mode

::::{tab-set}
:::{tab-item} MyST
````
```{image} logo-light.png
:class: only-light
```
````
:::
:::{tab-item} RST
```rst
.. image:: logo-light.png
   :class: only-light
```
:::
::::

### Combining both

Display different images for each theme:

::::{tab-set}
:::{tab-item} MyST
````
```{image} logo-light.png
:class: only-light
```
```{image} logo-dark.png
:class: only-dark
```
````
:::
:::{tab-item} RST
```rst
.. image:: logo-light.png
   :class: only-light

.. image:: logo-dark.png
   :class: only-dark
```
:::
::::
