"""Provides utilities to build language links and source links.

Inspired by PyData Sphinx Theme:
https://github.com/pydata/pydata-sphinx-theme/blob/main/src/pydata_sphinx_theme/edit_this_page.py
"""

from collections.abc import Callable


def create_lang_link(pagename: str) -> Callable[[str], str]:
    """Return a function that substitutes a pagename into a URL pattern."""
    def lang_link(pattern: str):
        url = pattern.replace("%s", pagename)
        if pagename == "index" or pagename.endswith("/index"):
            if url.endswith("/index/"):
                url = url[:-7]
            elif url.endswith("/index.html"):
                url = url[:-11]
        return url
    return lang_link


def create_edit_link(pagename: str, context: dict) -> Callable[[], str | None]:
    """Return a function that builds the 'edit/source' link for the current page."""
    default_provider_urls = {
        "bitbucket": "https://bitbucket.org/{}/{}/src/{}/%s?mode=edit",
        "github": "https://github.com/{}/{}/edit/{}/%s",
        "gitlab": "https://gitlab.com/{}/{}/-/edit/{}/%s",
    }

    def edit_link() -> str | None:
        file_name = f"{pagename}{context['page_source_suffix']}"
        doc_path = context.get("doc_path", "").removesuffix("/")
        file_path = f"{doc_path}/{file_name}" if doc_path else file_name

        if source_url := context.get("source_url"):
            return str(source_url).replace("%s", file_path)

        for provider, template in default_provider_urls.items():
            user = context.get(f"{provider}_user")
            repo = context.get(f"{provider}_repo")
            version = context.get(f"{provider}_version", "main")
            if user and repo and version:
                return template.format(user, repo, version).replace("%s", file_path)

    return edit_link
