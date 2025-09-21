import tempfile

import nox


@nox.session(reuse_venv=True)
def docs(session):
    pyproject = nox.project.load_toml("pyproject.toml")
    deps = nox.project.dependency_groups(pyproject, "docs")
    session.run("uv", "pip", "install", "-e", ".", *deps)
    session.run("sphinx-build", "docs", "docs/_build/html")


@nox.session(reuse_venv=True)
def serve(session):
    pyproject = nox.project.load_toml("pyproject.toml")
    deps = nox.project.dependency_groups(pyproject, "docs")
    session.run("uv", "pip", "install", "-e", ".", "sphinx-autobuild", *deps)
    with tempfile.TemporaryDirectory() as destination:
        session.run(
            "sphinx-autobuild",
            "--port=0",
            "--pre-build",
            "cmd /c npm run build",
            "--watch=src/",
            "--ignore=src/sphinx_breeze_theme/theme/breeze/static/",
            "--open-browser",
            "-T",
            "-a",
            "-b=dirhtml",
            "-a",
            "docs/",
            destination,
        )
