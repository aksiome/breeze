# jupyter-sphinx

Sphinx extension that executes embedded code in a Jupyter kernel and embeds outputs in the document.

- **Documentation**: [https://jupyter-sphinx.readthedocs.io/](https://jupyter-sphinx.readthedocs.io/)
- **Source Code**: [https://github.com/jupyter/jupyter-sphinx](https://github.com/jupyter/jupyter-sphinx)

```{eval-rst}

Basic Usage
-----------

Use the ``jupyter-execute`` directive to embed executable code:

.. jupyter-execute::

    name = 'world'
    print('hello ' + name + '!')

All cells share the same kernel, so variables persist across cells:

.. jupyter-execute::

    a = 1
    print('first cell: a = {}'.format(a))

.. jupyter-execute::

    a += 1
    print('second cell: a = {}'.format(a))


Rich Output
-----------

Plots
^^^^^

.. jupyter-execute::

    import numpy as np
    from matplotlib import pyplot
    %matplotlib inline

    x = np.linspace(1E-3, 2 * np.pi)
    pyplot.plot(x, np.sin(x) / x)
    pyplot.plot(x, np.cos(x))
    pyplot.grid()

LaTeX
^^^^^

.. jupyter-execute::

    from IPython.display import Latex
    Latex(r'\int_{-\infty}^\infty e^{-x^2}dx = \sqrt{\pi}')


Widgets
-------

Interactive widgets rendered via ipywidgets.

.. jupyter-execute::

    import ipywidgets as w
    from IPython.display import display


Numeric
^^^^^^^

Sliders
"""""""

.. jupyter-execute::

    display(
        w.IntSlider(value=5, min=0, max=10, description='IntSlider:'),
        w.IntRangeSlider(value=[3, 7], min=0, max=10, description='Range:'),
    )

Progress Bars
"""""""""""""

.. jupyter-execute::

    display(
        w.IntProgress(value=7, min=0, max=10, description='Default:'),
        w.IntProgress(value=5, min=0, max=10, description='Info:', bar_style='info'),
        w.IntProgress(value=8, min=0, max=10, description='Success:', bar_style='success'),
        w.IntProgress(value=3, min=0, max=10, description='Warning:', bar_style='warning'),
        w.IntProgress(value=6, min=0, max=10, description='Danger:', bar_style='danger'),
    )

Boolean
^^^^^^^

.. jupyter-execute::

    display(
        w.Checkbox(value=True, description='Checkbox'),
        w.ToggleButton(value=False, description='Toggle', icon='check'),
        w.Valid(value=True, description='Valid'),
        w.Valid(value=False, description='Invalid'),
    )

Selection
^^^^^^^^^

.. jupyter-execute::

    options = ['Option A', 'Option B', 'Option C']
    display(
        w.Dropdown(options=options, value='Option A', description='Dropdown:'),
        w.RadioButtons(options=options, description='Radio:'),
        w.Select(options=options, description='Select:', rows=3),
        w.SelectMultiple(options=options, value=['Option A'], description='Multi:', rows=3),
        w.ToggleButtons(options=options, description='Toggles:'),
        w.SelectionSlider(options=options, description='Slider:'),
    )

String
^^^^^^

.. jupyter-execute::

    display(
        w.Text(value='Hello', description='Text:'),
        w.Textarea(value='Multi-line\ntext input', description='Textarea:'),
        w.Password(value='secret', description='Password:'),
        w.Combobox(value='', placeholder='Type or select', options=['Apple', 'Banana'], description='Combobox:'),
    )

Buttons
^^^^^^^

.. jupyter-execute::

    display(
        w.HBox([
            w.Button(description='Default'),
            w.Button(description='Primary', button_style='primary'),
            w.Button(description='Success', button_style='success'),
            w.Button(description='Info', button_style='info'),
            w.Button(description='Warning', button_style='warning'),
            w.Button(description='Danger', button_style='danger'),
        ]),
        w.HBox([
            w.Button(description='', icon='home', tooltip='Home'),
            w.Button(description='', icon='search', tooltip='Search'),
            w.Button(description='', icon='cog', tooltip='Settings'),
            w.Button(description='', icon='download', tooltip='Download'),
        ]),
    )

Date & Color
^^^^^^^^^^^^

.. jupyter-execute::

    display(
        w.DatePicker(description='Date:'),
        w.ColorPicker(value='#3b82f6', description='Color:'),
    )

File Upload
^^^^^^^^^^^

.. jupyter-execute::

    display(
        w.FileUpload(accept='.txt', description='Upload'),
    )

Play / Animation
^^^^^^^^^^^^^^^^

.. jupyter-execute::

    play = w.Play(value=0, min=0, max=100, step=1, interval=100, description='Play:')
    slider = w.IntSlider(value=0, min=0, max=100, description='Value:')
    w.jslink((play, 'value'), (slider, 'value'))
    display(w.HBox([play, slider]))

Containers
^^^^^^^^^^

Accordion
"""""""""

.. jupyter-execute::

    display(w.Accordion(children=[
        w.Label('Content of section one'),
        w.Label('Content of section two'),
    ], titles=['Section 1', 'Section 2']))

Tabs
""""

.. jupyter-execute::

    display(w.Tab(children=[
        w.Label('Content of tab one'),
        w.Label('Content of tab two'),
    ], titles=['Tab 1', 'Tab 2']))

Tags Input
^^^^^^^^^^

.. jupyter-execute::

    display(w.TagsInput(value=['python', 'jupyter', 'widgets'], allowed_tags=['python', 'jupyter', 'widgets', 'sphinx']))

Linked Widgets
^^^^^^^^^^^^^^

.. jupyter-execute::

    slider = w.IntSlider(description='Value:', min=0, max=100, value=50)
    progress = w.IntProgress(description='Progress:', min=0, max=100)
    text = w.IntText(description='Number:')
    w.jslink((slider, 'value'), (progress, 'value'))
    w.jslink((slider, 'value'), (text, 'value'))
    display(w.VBox([slider, progress, text]))


Directive Options
-----------------

Hide Code
^^^^^^^^^

Use ``:hide-code:`` to show only output:

.. jupyter-execute::
    :hide-code:

    print('this code is invisible')

Hide Output
^^^^^^^^^^^

Use ``:hide-output:`` to show only code:

.. jupyter-execute::
    :hide-output:

    print('this output is invisible')

Code Below
^^^^^^^^^^

Use ``:code-below:`` to display code after output:

.. jupyter-execute::
    :code-below:

    print('this code is below the output')

Line Numbers
^^^^^^^^^^^^

Use ``:linenos:`` to add line numbers:

.. jupyter-execute::
    :linenos:

    print('A')
    print('B')
    print('C')

Use ``:lineno-start:`` to start from a specific line:

.. jupyter-execute::
    :lineno-start: 7

    print('A')
    print('B')
    print('C')

Emphasize Lines
^^^^^^^^^^^^^^^

Use ``:emphasize-lines:`` to highlight specific lines:

.. jupyter-execute::
    :linenos:
    :emphasize-lines: 2,5-6

    d = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
    }


Exception Handling
------------------

Use ``:raises:`` to display tracebacks as output instead of failing the build:

.. jupyter-execute::
    :raises:

    1 / 0

Specify exception types to catch only specific errors:

.. jupyter-execute::
    :raises: KeyError, ValueError

    a = {'hello': 'world!'}
    a['jello']

stderr Output
^^^^^^^^^^^^^

Use ``:stderr:`` to display stderr output without build warnings:

.. jupyter-execute::
    :stderr:

    import sys
    print("hello, world!", file=sys.stderr)


Manual Cells
------------

Use ``jupyter-input`` and ``jupyter-output`` for non-executed code samples:

.. jupyter-input::
    :linenos:

    import time

    def slow_print(str):
        time.sleep(4000)    # Simulate an expensive process
        print(str)

    slow_print("hello, world!")

.. jupyter-output::

    hello, world!
```
