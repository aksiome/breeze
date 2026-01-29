# sphinx-design

## Badges

{bdg}`plain badge`

{bdg-primary}`primary`
{bdg-secondary}`secondary`
{bdg-success}`success`
{bdg-info}`info`
{bdg-warning}`warning`
{bdg-danger}`danger`
{bdg-muted}`muted`

{bdg-primary-line}`primary-line`
{bdg-secondary-line}`secondary-line`
{bdg-success-line}`success-line`
{bdg-info-line}`info-line`
{bdg-warning-line}`warning-line`
{bdg-danger-line}`danger-line`
{bdg-muted-line}`muted-line`

## Buttons

::::{grid} auto
:gutter: 2

:::{grid-item}
```{button-link} https://example.com
Plain button
```
:::
::::

::::{grid} auto
:gutter: 2

:::{grid-item}
```{button-link} https://example.com
:color: primary
primary
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: secondary
secondary
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: success
success
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: info
info
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: warning
warning
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: danger
danger
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: muted
muted
```
:::
::::

::::{grid} auto
:gutter: 2

:::{grid-item}
```{button-link} https://example.com
:color: primary
:outline:
primary-outline
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: secondary
:outline:
secondary-outline
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: success
:outline:
success-outline
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: info
:outline:
info-outline
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: warning
:outline:
warning-outline
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: danger
:outline:
danger-outline
```
:::
:::{grid-item}
```{button-link} https://example.com
:color: muted
:outline:
muted-outline
```
:::
::::


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

:::{dropdown} Open dropdown
:open:

Dropdown content
:::

### Styled dropdown

:::{dropdown} Primary dropdown title
:color: primary
:icon: note

Dropdown content
:::
::::

:::{dropdown} Secondary dropdown title
:color: secondary
:icon: note

Dropdown content
:::
::::

:::{dropdown} Success dropdown title
:color: success
:icon: check-circle

Dropdown content
:::
::::

:::{dropdown} Info dropdown title
:color: info
:icon: info

Dropdown content
:::
::::

:::{dropdown} Warning dropdown title
:color: warning
:icon: alert

Dropdown content
:::
::::

:::{dropdown} Danger dropdown title
:color: danger
:icon: x-circle

Dropdown content
:::
::::


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
