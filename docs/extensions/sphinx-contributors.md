# sphinx-contributors

Sphinx extension that helps you recognize the people who have contributed to an open-source project.

- **Documentation**: [https://sphinx-contributors.readthedocs.io/](https://sphinx-contributors.readthedocs.io/)
- **Source Code**: [https://github.com/dgarcia360/sphinx-contributors](https://github.com/dgarcia360/sphinx-contributors)

## Example

::::{tab-set}

:::{tab-item} MyST
````md
```{contributors} aksiome/breeze
```
````
:::

:::{tab-item} RST
````rst
.. contributors:: aksiome/breeze
````
:::

::::

```{contributors} aksiome/breeze
```

---

::::{tab-set}

:::{tab-item} MyST
````md
```{contributors} aksiome/breeze
:avatars:
```
````
:::

:::{tab-item} RST
````rst
.. contributors:: aksiome/breeze
    :avatars:
````
:::

::::

```{contributors} aksiome/breeze
:avatars:
```

---

::::{tab-set}

:::{tab-item} MyST
````md
```{contributors} aksiome/breeze
:contributions:
```
````
:::

:::{tab-item} RST
````rst
.. contributors:: aksiome/breeze
    :contributions:
````
:::

::::

```{contributors} aksiome/breeze
:contributions:
```

---

::::{tab-set}
:::{tab-item} MyST
````md
```{contributors} aksiome/breeze
:avatars:
:contributions:
```
````
:::

:::{tab-item} RST
````rst
.. contributors:: aksiome/breeze
    :avatars:
    :contributions:
````
:::

::::

```{contributors} aksiome/breeze
:avatars:
:contributions:
```
