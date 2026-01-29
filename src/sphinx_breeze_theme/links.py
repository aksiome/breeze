"""Provides utilities to build language links and source links.

Inspired by PyData Sphinx Theme:
https://github.com/pydata/pydata-sphinx-theme/blob/main/src/pydata_sphinx_theme/edit_this_page.py
"""

from collections.abc import Callable
from urllib.parse import urlparse


KNOWN_DOMAINS = {
    # Code hosting
    "bitbucket.org":      ("Bitbucket", "bitbucket"),
    "github.com":         ("GitHub", "mark-github"),
    "gitlab.com":         ("GitLab", "gitlab"),

    # Package registries
    "pypi.org":           ("PyPI", "pypi"),
    "npmjs.com":          ("npm", "npm"),
    "crates.io":          ("crates.io", "package-dependencies"),
    "packagist.org":      ("Packagist", "packagist"),
    "rubygems.org":       ("RubyGems", "rubygems"),
    "nuget.org":          ("NuGet", "nuget"),
    "search.maven.org":   ("Maven Central", "apachemaven"),
    "mvnrepository.com":  ("Maven Repository", "apachemaven"),

    # Documentation
    "readthedocs.org":    ("Read the Docs", "readthedocs"),
    "docs.rs":            ("docs.rs", "docsdotrs"),
    "gitbook.io":         ("GitBook", "gitbook"),
    "github.io":          ("GitHub Pages", "githubpages"),

    # Social media
    "youtube.com":        ("YouTube", "youtube"),
    "facebook.com":       ("Facebook", "facebook"),
    "instagram.com":      ("Instagram", "instagram"),
    "reddit.com":         ("Reddit", "reddit"),
    "tiktok.com":         ("TikTok", "tiktok"),
    "twitch.tv":          ("Twitch", "twitch"),
    "snapchat.com":       ("Snapchat", "snapchat"),
    "twitter.com":        ("X (Twitter)", "x"),
    "x.com":              ("X (Twitter)", "x"),

    # Community
    "discord.com":        ("Discord", "discord"),
    "discord.gg":         ("Discord", "discord"),
    "telegram.org":       ("Telegram", "telegram"),
    "gitter.im":          ("Gitter", "gitter"),
    "stackoverflow.com":  ("Stack Overflow", "stackoverflow"),
    "medium.com":         ("Medium", "medium"),

    # Funding
    "patreon.com":        ("Patreon", "patreon"),
    "opencollective.com": ("Open Collective", "opencollective"),
    "ko-fi.com":          ("Ko-fi", "kofi"),
    "buymeacoffee.com":   ("Buy Me a Coffee", "buymeacoffee"),
}


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
        page_source_suffix = context.get("page_source_suffix")
        if not page_source_suffix:
            return None

        file_name = f"{pagename}{page_source_suffix}"
        doc_path = context.get("doc_path", "").removesuffix("/")
        file_path = f"{doc_path}/{file_name}" if doc_path else file_name

        if source_edit_url := context.get("source_edit_url"):
            return str(source_edit_url).replace("%s", file_path)

        for provider, template in default_provider_urls.items():
            user = context.get(f"{provider}_user")
            repo = context.get(f"{provider}_repo")
            version = context.get(f"{provider}_version", "main")
            if user is not None and repo is not None:
                return template.format(user, repo, version).replace("%s", file_path)

    return edit_link


def process_links(links: list[dict[str, str] | str]) -> list[dict[str, str]]:
    """Process external links to ensure they have required fields."""
    processed = []
    for link in links:
        data = {"url": link} if isinstance(link, str) else dict(link)

        name, icon = lookup_defaults(data["url"])
        data.setdefault("name", name)
        data.setdefault("icon", icon)

        processed.append(data)

    return processed


def lookup_defaults(url: str):
    """Lookup default name and icon for a given URL."""
    if url.startswith("mailto:"):
        return "Email", "mail"

    parsed = urlparse(url)
    domain = parsed.netloc.lower()

    if domain in KNOWN_DOMAINS:
        return KNOWN_DOMAINS[domain]

    return domain or url, "link"
