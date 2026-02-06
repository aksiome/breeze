# sphinx-treeview

Sphinx extension that that provides a customizable, filesystem-like tree view.

- **Documentation**: [https://sphinx-tree-view.readthedocs.io/en/latest/](https://sphinx-tree-view.readthedocs.io/en/latest/)
- **Source Code**: [https://github.com/Altearn/Sphinx-Tree-View](https://github.com/Altearn/Sphinx-Tree-View)

## Example

A basic tree structure with one folder and two files:

:::{treeview}
- {dir}`folder` folder
  - {dir}`file` file.jpeg
  - {dir}`file` file.png
:::

A collapsible tree with nested folders, one collapsed by default:

:::{treeview}
- [-] {dir}`folder` folder
  - [+] {dir}`folder` user
    - {dir}`file` notes.txt
  - [-] {dir}`folder` not-a-secret
    - {dir}`file` secret.txt
:::
