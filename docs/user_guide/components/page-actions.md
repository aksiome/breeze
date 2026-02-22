# ⚙️ Page actions

Display quick actions for the current page, including copying the source and opening in AI assistants.

## Configuration

The component is enabled by default. Configure it via `html_theme_options` in `conf.py`:

```python
html_theme_options = {
    "page_actions": True,  # Enable/disable the component
}
```

## Requirements

This component requires source files to be available. Sphinx copies sources by default (`html_copy_source = True`). If you've disabled this, the component won't render.

## AI integration

Enable AI assistant buttons to help readers understand documentation:

```python
html_theme_options = {
    "page_actions_ai_chatgpt": True,
    "page_actions_ai_claude": True,
    "page_actions_ai_perplexity": True,
}
```

When clicked, these buttons open the AI assistant with a prompt containing the page URL.

### Custom prompt

Customize the AI prompt using `page_actions_ai_prompt`. Use `%s` as placeholder for the page URL:

```python
html_theme_options = {
    "page_actions_ai_prompt": "Explain this documentation page: %s",
}
```

If not specified, the default prompt is:

> Read from %s so I can ask questions about it.

## Configuration options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `page_actions` | bool | `True` | Enable/disable the component |
| `page_actions_ai_chatgpt` | bool | `False` | Show "Open in ChatGPT" button |
| `page_actions_ai_claude` | bool | `False` | Show "Open in Claude" button |
| `page_actions_ai_perplexity` | bool | `False` | Show "Open in Perplexity" button |
| `page_actions_ai_prompt` | str | `None` | Custom prompt template for AI assistants |

## Styling

Customize the component appearance with CSS variables:

```css
:root {
  --bz-page-actions-background: color-mix(in oklab, var(--bz-color-surface-4), var(--bz-color-surface-3));
  --bz-page-actions-background-hover: var(--bz-color-surface-3);
  --bz-page-actions-color: var(--bz-link-color);
  --bz-page-actions-color-hover: var(--bz-link-color-hover);
  --bz-page-actions-border-color: var(--bz-color-outline);
  --bz-page-actions-icon-color: var(--bz-color-muted);
  --bz-page-actions-font-size: var(--bz-size-sm);
  --bz-page-actions-font-family: inherit;
}
```
