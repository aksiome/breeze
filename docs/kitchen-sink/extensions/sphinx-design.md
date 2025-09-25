# Sphinx Design


## Card

:::{card} Card Title

Card content
:::


:::{card} Card Title
Header
^^^
Card content
+++
Footer
:::


(cards-clickable)=

### Clickable Cards

Using the `link` and `link-type` options, you can turn an entire card into a clickable link. Try hovering over then clicking on the cards below:

:::{card} Clickable Card (external)
:link: https://example.com
:link-alt: example.com

The entire card can be clicked to navigate to <https://example.com>.
:::

:::{card} Clickable Card (internal)
:link: cards-clickable
:link-type: ref
:link-alt: clickable cards

The entire card can be clicked to navigate to the `cards-clickable` reference target.
:::

## Dropdown

:::{dropdown} Dropdown title
Dropdown content
:::


## Tabs

::::{tab-set}

:::{tab-item} Label1
Content 1
:::

:::{tab-item} Label2
Content 2
:::

:::{tab-item} Label3
Content 3
:::

:::{tab-item} Label4
Content 4
:::

::::

### Tabbed code

````{tab-set-code}

```{code-block} python
a = 1;
```

```{code-block} javascript
const a = 1;
```
````
