# ✏️ Edit this page

Display an "Edit this page" link allowing readers to contribute fixes directly on your repository.

## Configuration

Configure edit links via `html_context` in `conf.py`. This component supports GitHub, GitLab, and Bitbucket out of the box.

::::{tab-set}
:::{tab-item} GitHub
```python
html_context = {
    "github_user": "your-username",
    "github_repo": "your-repo",
    "github_version": "main",
    "doc_path": "docs",
}
```
:::
:::{tab-item} GitLab
```python
html_context = {
    "gitlab_user": "your-username",
    "gitlab_repo": "your-repo",
    "gitlab_version": "main",
    "doc_path": "docs",
}
```
:::
:::{tab-item} Bitbucket
```python
html_context = {
    "bitbucket_user": "your-username",
    "bitbucket_repo": "your-repo",
    "bitbucket_version": "main",
    "doc_path": "docs",
}
```
:::
::::

## Configuration options

| Key | Description |
|-----|-------------|
| `{provider}_user` | Your username or organization name |
| `{provider}_repo` | Repository name |
| `{provider}_version` | Branch name (defaults to `main`) |
| `doc_path` | Path to documentation folder within your repository |

## Custom source URL

For self-hosted instances or other providers, use a custom URL pattern with `%s` as placeholder:

```python
html_context = {
    "source_edit_url": "https://git.example.com/user/repo/edit/main/docs/%s",
}
```

The `%s` placeholder is replaced with the full path to the source file (e.g., `user_guide/quickstart.md`).

## Shared configuration

If you're already using the [repo-stats](repo-stats.md) component, the edit this page component will automatically use the same values. No additional configuration needed.
