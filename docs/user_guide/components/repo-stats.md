# ⭐ Repository stats

Display a link to your repository with live star and fork counts.

## Configuration

Configure repository stats via `html_context` in `conf.py`. This component supports GitHub and GitLab.

### GitHub

```python
html_context = {
    "github_user": "your-username",
    "github_repo": "your-repo",
}
```

### GitLab

```python
html_context = {
    "gitlab_user": "your-username",
    "gitlab_repo": "your-repo",
}
```

## Configuration options

| Key | Description |
|-----|-------------|
| `{provider}_user` | Your username or organization name |
| `{provider}_repo` | Repository name |

## Shared configuration

If you're already using the [edit-this-page](edit-this-page.md) component, the repo stats component will automatically use the same `github_user`/`github_repo` or `gitlab_user`/`gitlab_repo` values. No additional configuration needed.
