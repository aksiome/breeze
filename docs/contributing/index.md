# 🤝 Contributing

Thank you for your interest in contributing to Breeze! All contributions are welcome, whether it's code, documentation, translations, or bug reports.

## Getting started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/breeze.git
   cd breeze
   ```
3. **Install dependencies**: Ensure you have [Node.js](https://nodejs.org/) installed (required for building frontend assets)
4. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development workflow

The project uses [Nox](https://nox.thea.codes/) to manage development tasks. If you have [uv](https://docs.astral.sh/uv/) installed, you can use `uvx` to run Nox directly without installing it globally.

### Building and serving docs

```bash
# Build documentation
uvx nox -s docs

# Serve docs with hot reload (watches for changes)
uvx nox -s serve
```

## Ways to contribute

### Bug reports

Found a bug? Please [open an issue](https://github.com/aksiome/breeze/issues/new) with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/Sphinx version if relevant

### Feature requests

Have an idea? Open an issue to discuss it before implementing. This helps ensure the feature aligns with the project's direction.

### Code contributions

1. Make your changes in a feature branch
2. Test your changes locally with `uvx nox -s serve`
3. Commit with clear, descriptive messages
4. Push to your fork and open a pull request
5. Describe what your PR does and link any related issues

### Documentation

Documentation improvements are always welcome! The docs use MyST Markdown and live in the `docs/` folder.

### Translations

The theme supports internationalization. Translation contributions help make Breeze accessible to more users.

## Pull request guidelines

- Keep PRs focused on a single change
- Update documentation if your change affects user-facing features
- Ensure the docs build without errors
- Be responsive to feedback during review

## Questions?

Feel free to [open an issue](https://github.com/aksiome/breeze/issues) for any questions about contributing.
