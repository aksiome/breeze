# sphinx-togglebutton

Sphinx extension to add "toggle button" elements to sections of your page.

- **Documentation**: [https://sphinx-togglebutton.readthedocs.io/](https://sphinx-togglebutton.readthedocs.io/)
- **Source Code**: [https://github.com/executablebooks/sphinx-togglebutton](https://github.com/executablebooks/sphinx-togglebutton)

## Example

### Collapse admonitions

:::{note} Click the title to toggle
:class: dropdown

This title was made into a dropdown admonition by adding `:class: dropdown` to it.
:::

### Collapse content

```{image} https://picsum.photos/200/200
:class: toggle
```

### Toggle directive

```{toggle}
This is a toggled content block!
```
