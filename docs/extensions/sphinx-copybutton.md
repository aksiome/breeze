# sphinx-copybutton

Sphinx extension that adds a "copy" button to code blocks in Sphinx.

- **Documentation**: [https://sphinx-copybutton.readthedocs.io/](https://sphinx-copybutton.readthedocs.io/)
- **Source Code**: [https://github.com/executablebooks/sphinx-copybutton](https://github.com/executablebooks/sphinx-copybutton)

## Example

```{hint}
Hover on the code block, to see the copy button.
```

```py
from typing import Iterator

# This is an example
class Math:
    @staticmethod
    def fib(n: int) -> Iterator[int]:
        """Fibonacci series up to n"""
        a, b = 0, 1
        while a < n:
            yield a
            a, b = b, a + b
```
