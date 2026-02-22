# ⌨️ Accessibility

Breeze is designed with accessibility in mind, following web accessibility best practices.

## Features

- **Skip to content**: A skip link appears on focus, allowing keyboard users to bypass navigation
- **Semantic HTML**: Proper heading hierarchy, landmarks, and ARIA attributes
- **Keyboard navigation**: All interactive elements are keyboard accessible
- **Color contrast**: High contrast color schemes for both light and dark modes
- **Focus indicators**: Visible focus states for keyboard navigation
- **Responsive text**: Content scales with browser zoom settings

## Keyboard shortcuts

| Shortcut | Action |
|----------|--------|
| {kbd}`Ctrl+K` / {kbd}`Cmd+K` | Open search |

## Screen readers

The theme uses ARIA landmarks and labels to help screen reader users navigate:

- `<header>` for site header
- `<nav>` for navigation regions
- `<main>` for primary content
- `<aside>` for sidebars
- `<footer>` for site footer

## High contrast styles

Breeze uses the [accessible-pygments](https://github.com/Quansight-Labs/accessible-pygments) package for syntax highlighting, providing WCAG AA compliant color contrast in code blocks.

Configure syntax highlighting styles in `conf.py`:

```python
pygments_light_style = "a11y-high-contrast-light"
pygments_dark_style = "github-dark-high-contrast"
```
