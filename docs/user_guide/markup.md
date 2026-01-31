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

### Example

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
