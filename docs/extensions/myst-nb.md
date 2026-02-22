---
file_format: mystnb
kernelspec:
  name: python3
mystnb:
  execution_mode: force
---

# myst-nb

MyST-NB is a Sphinx extension for parsing and executing Jupyter Notebooks with MyST Markdown.

- **Documentation**: [https://myst-nb.readthedocs.io/](https://myst-nb.readthedocs.io/)
- **Source Code**: [https://github.com/executablebooks/MyST-NB](https://github.com/executablebooks/MyST-NB)

## Basic Outputs

### Simple Expression

```{code-cell} python
6 * 7
```

### Print Statements

```{code-cell} python
print("Hello, world!")
```

### Multiple Outputs

```{code-cell} python
print("First output")
print("Second output")
"Return value"
```

## Rich Outputs

### DataFrames

```{code-cell} python
import pandas as pd

data = {
    "Name": ["Alice", "Bob", "Charlie", "Diana"],
    "Age": [25, 30, 35, 28],
    "City": ["New York", "London", "Paris", "Tokyo"]
}
pd.DataFrame(data)
```

### Numeric DataFrame

```{code-cell} python
import numpy as np

np.random.seed(42)
df = pd.DataFrame(
    np.random.randn(8, 4),
    columns=["A", "B", "C", "D"]
)
df
```

### Styled DataFrame

```{code-cell} python
df.style.highlight_max(axis=0,props=("color:white; font-weight:bold; background-color:blueviolet;"))
```

### Matplotlib

```{code-cell} python
import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=[6, 3])
x = np.linspace(-5, 5, 50)
ax.plot(x, np.sinc(x))
plt.show()
```

### LaTeX Math

```{code-cell} python
from IPython.display import Math

Math(r"\int\limits_{-\infty}^\infty f(x) \delta(x - x_0) dx = f(x_0)")
```

### HTML Output

```{code-cell} python
from IPython.display import HTML

HTML("""
<div style="padding: 1rem; border: 2px solid #3b82f6; border-radius: 8px;">
    <strong>Custom HTML Block</strong>
    <p>This is rendered HTML output from IPython.display.</p>
</div>
""")
```

### Markdown Output

```{code-cell} python
from IPython.display import Markdown

Markdown("""
**Bold text** and *italic text* rendered from code.

- Item one
- Item two
- Item three
""")
```

### Images

```{code-cell} python
from IPython.display import Image

Image(url="https://picsum.photos/400/400", width=400)
```

## Cell Visibility

### Hide Input

The source code is hidden but output is visible.

```{code-cell} python
:tags: [hide-input]

# This code is hidden but output shows
result = sum(range(1, 11))
print(f"Sum of 1-10: {result}")
```

### Hide Output

The source code is visible but output is hidden.

```{code-cell} python
:tags: [hide-output]

# Output is hidden
print("This output is hidden")
```

### Hide Cell

Both input and output are hidden but can be toggled.

```{code-cell} python
:tags: [hide-cell]

# Both code and output are hidden
hidden_value = "This entire cell is hidden"
print(hidden_value)
```

### Remove Input

Input is completely removed from the page.

```{code-cell} python
:tags: [remove-input]

print("Only this output appears, no code visible at all")
```

### Remove Output

Output is completely removed from the page.

```{code-cell} python
:tags: [remove-output]

# This code is visible but output is completely removed
print("This output will not appear")
```

### Remove Cell

The entire cell is removed from the page (nothing visible).

```{code-cell} python
:tags: [remove-cell]

# This entire cell is removed - you won't see this at all
secret = "invisible"
```

## Error Handling

### Traceback Display

```{code-cell} python
:tags: [raises-exception]

def divide(a, b):
    return a / b

divide(1, 0)
```

### Standard Error

```{code-cell} python
import sys
print("This appears on stderr", file=sys.stderr)
```

### Warnings

```{code-cell} python
import warnings
warnings.warn("This is a warning message", UserWarning)
```

## ANSI Colors

### Colored Terminal Output

```{code-cell} python
print("\033[31mRed text\033[0m")
print("\033[32mGreen text\033[0m")
print("\033[33mYellow text\033[0m")
print("\033[34mBlue text\033[0m")
print("\033[35mMagenta text\033[0m")
print("\033[36mCyan text\033[0m")
print("\033[1m\033[31mBold red text\033[0m")
print("\033[4m\033[34mUnderlined blue text\033[0m")
```

## Glue

Store variables and embed them elsewhere in the document.

```{code-cell} python
from myst_nb import glue

my_value = 42
glue("answer", my_value)

import matplotlib.pyplot as plt
fig, ax = plt.subplots(figsize=[4, 2])
ax.plot([1, 2, 3], [1, 4, 2])
glue("my_figure", fig, display=False)
```

The answer is {glue:}`answer`. Here's the figure:

```{glue:figure} my_figure
:figwidth: 300px
:align: center

A glued matplotlib figure.
```
