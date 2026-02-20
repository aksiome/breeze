"""
Console Output
======================

This example demonstrates how sphinx-gallery captures and displays
stdout output from ``print()`` statements and other console output.

.. note::

   All printed output is captured and rendered in the generated
   documentation, making it easy to show computation results.
"""

import matplotlib.pyplot as plt

# %%
# Basic Print Statements
# ----------------------
#
# Simple print output is captured and displayed in a styled output block.

print("Hello from sphinx-gallery!")
print("This output is captured and displayed.")

# %%
# Formatted Output
# ----------------
#
# More complex formatted output with multiple lines.

print("=" * 50)
print("Formatted Report")
print("=" * 50)

data = {"apples": 12, "oranges": 8, "bananas": 15, "grapes": 23}

print("\nFruit Inventory:")
print("-" * 30)
for fruit, count in data.items():
    print(f"  {fruit.capitalize():12} : {count:3d} items")
print("-" * 30)
print(f"  {'Total':12} : {sum(data.values()):3d} items")

# %%
# Numeric Computations
# --------------------
#
# Output from calculations and data processing.

import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

print(f"Array: {arr}")
print(f"Sum: {arr.sum()}")
print(f"Mean: {arr.mean():.2f}")
print(f"Std: {arr.std():.2f}")
print(f"Min: {arr.min()}, Max: {arr.max()}")

# %%
# Multi-line and Tabular Output
# -----------------------------
#
# Displaying structured data in table format.

headers = ["Name", "Age", "City"]
rows = [
    ["Alice", 28, "New York"],
    ["Bob", 34, "Los Angeles"],
    ["Charlie", 22, "Chicago"],
]

# Print as table
print(f"\n{headers[0]:<10} {headers[1]:<6} {headers[2]:<15}")
print("-" * 35)
for row in rows:
    print(f"{row[0]:<10} {row[1]:<6} {row[2]:<15}")

# %%
# Return Values
# -------------
#
# The last expression in a code block is also displayed if it has a value.

result = {"status": "success", "count": 42, "items": ["a", "b", "c"]}
result

# %%
# Minimal Plot
# ------------
#
# A simple plot to ensure this example runs (files must start with plot\_).

plt.figure(figsize=(4, 2))
plt.text(0.5, 0.5, "Output Demo", ha="center", va="center", fontsize=16)
plt.axis("off")
plt.tight_layout()
plt.show()
