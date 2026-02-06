"""Patches for sphinxext-opengraph to handle emoji in social cards."""

from emoji import replace_emoji

try:
    import sphinxext.opengraph
    from sphinxext.opengraph import _social_cards

    _original_create = _social_cards.create_social_card

    def _create_social_card_no_emoji(
        config_social, site_name, page_title, description, *args, **kwargs
    ):
        """Wrap create_social_card to strip emojis that can't be rendered."""
        return _original_create(
            config_social,
            replace_emoji(site_name or "").strip(),
            replace_emoji(page_title or "").strip(),
            replace_emoji(description or "").strip(),
            *args,
            **kwargs,
        )

    # Patch both the module and the local import in sphinxext.opengraph
    _social_cards.create_social_card = _create_social_card_no_emoji
    sphinxext.opengraph.create_social_card = _create_social_card_no_emoji

except ImportError:
    # Social cards not available (matplotlib not installed)
    pass
