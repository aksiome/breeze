# ✍️ Markup

```{note}
Sphinx supports two markup languages for writing documentation:

- [reStructuredText (RST)](https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html) - Sphinx's native markup language
- [MyST Markdown](https://myst-parser.readthedocs.io/) - Markdown with Sphinx extensions
```

This page documents theme-specific classes and options that extend the standard markup.

## Theme visibility

Show or hide content based on the active theme. See [Light and dark mode](customisation/light-dark.md) for more details on theme configuration.

| Class | Description |
|-------|-------------|
| `.only-light` | Only visible in light mode |
| `.only-dark` | Only visible in dark mode |
| `.invert-light` | Inverts colors in light mode |
| `.invert-dark` | Inverts colors in dark mode |

### Show/Hide example

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

### Invert example

Automatically invert an image's colors based on the theme. Useful for simple graphics, diagrams, or logos that work well when inverted.

::::{tab-set}
:::{tab-item} MyST
````
```{image} diagram.png
:class: invert-dark
```
````
:::
:::{tab-item} RST
```rst
.. image:: diagram.png
   :class: invert-dark
```
:::
::::

**Demo:** This image inverts in dark mode (toggle theme to see the effect):

```{image} https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/959px-QR_code_for_mobile_English_Wikipedia.svg.png
:class: invert-dark
:width: 150px
```
