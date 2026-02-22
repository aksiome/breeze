# ⭐ Repository stats

Display a link to your repository with live star and fork counts.

## Configuration

Configure repository stats via `html_context` in `conf.py`. This component supports GitHub and GitLab.


::::{tab-set}
:::{tab-item} GitHub
```python
html_context = {
    "github_user": "your-username",
    "github_repo": "your-repo",
}
```
:::
:::{tab-item} GitLab
```python
html_context = {
    "gitlab_user": "your-username",
    "gitlab_repo": "your-repo",
}
```
:::
::::

## Configuration options

| Key | Description |
|-----|-------------|
| `{provider}_user` | Your username or organization name |
| `{provider}_repo` | Repository name |

## Shared configuration

If you're already using the [edit-this-page](edit-this-page.md) component, the repo stats component will automatically use the same values. No additional configuration needed.

## Styling

Customize the component appearance with CSS variables:

```css
:root {
  --bz-repo-stats-background: color-mix(in oklab, var(--bz-color-surface-4), var(--bz-color-surface-3));
  --bz-repo-stats-background-hover: var(--bz-color-surface-3);
  --bz-repo-stats-border-color: var(--bz-color-outline);
  --bz-repo-stats-color: var(--bz-color-text);
  --bz-repo-stats-color-variant: var(--bz-color-muted);
  --bz-repo-stats-font-size: var(--bz-size-sm);
  --bz-repo-stats-font-family: inherit;
}
```
