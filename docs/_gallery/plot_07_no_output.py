"""
Text-Only
=================

This example demonstrates a gallery entry without any figures.
It shows how sphinx-gallery handles code-focused examples with
extensive documentation and no visual output.

.. note::

   Examples without figures use a default placeholder thumbnail
   in the gallery view.
"""

import matplotlib.pyplot as plt

# %%
# Working with Data Structures
# ----------------------------
#
# This section shows basic Python data manipulation without plots.

data = {
    "name": "Example",
    "values": [1, 2, 3, 4, 5],
    "metadata": {"version": "1.0", "author": "Demo"},
}

print("Data structure:")
for key, value in data.items():
    print(f"  {key}: {value}")

# %%
# List Comprehensions
# -------------------
#
# Demonstrating various list operations and transformations.

numbers = list(range(10))
print(f"Original: {numbers}")

# Filter even numbers
evens = [n for n in numbers if n % 2 == 0]
print(f"Even numbers: {evens}")

# Square each number
squares = [n**2 for n in numbers]
print(f"Squares: {squares}")

# %%
# String Formatting
# -----------------
#
# Various ways to format strings in Python.

name = "World"
count = 42

# f-string (recommended)
print(f"Hello, {name}! Count: {count}")

# format method
print("Hello, {}! Count: {}".format(name, count))

# %%
# Summary
# -------
#
# This example demonstrates that sphinx-gallery can handle
# pure Python examples without any matplotlib figures. The output
# from ``print()`` statements is captured and displayed.
#
# Note: A minimal hidden plot is included to ensure execution.

# sphinx_gallery_thumbnail_path = '_static/no_image.png'

plt.figure(figsize=(1, 1))
plt.axis("off")
plt.close()
