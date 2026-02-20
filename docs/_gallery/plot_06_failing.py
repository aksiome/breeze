"""
Error Output
===============

This example intentionally raises an exception to demonstrate how
sphinx-gallery displays error tracebacks in the documentation.

.. warning::

   This example is expected to fail. The error output below shows
   how sphinx-gallery renders Python exceptions.
"""

# sphinx_gallery_failing_thumbnail = False

import matplotlib.pyplot as plt

# %%
# Setup Code
# ----------
#
# This section runs successfully before the error.

data = [1, 2, 3, 4, 5]
print(f"Data loaded: {data}")
print(f"Length: {len(data)}")

# %%
# Triggering an Error
# -------------------
#
# The following code will raise a ``ValueError`` to demonstrate
# error handling and traceback display in sphinx-gallery.

# This will raise an error
raise ValueError(
    "This is an intentional error to demonstrate sphinx-gallery's "
    "error handling. The traceback below shows how failures are displayed."
)
