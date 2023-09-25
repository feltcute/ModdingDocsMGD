.. _breakingchange:

**Breaking Changes**
====================

This page outlines any breaking changes between breaking game releases to help with updating mods.

**V25.6**
---------

- Removed ``{UseSetColor}`` and ``{SetTextColor}``, both being succeeded by ``{StoredColor}``, see :ref:`coloredtextmarkup` for more information on the new syntax.
- ``{ColorEnd}`` :ref:`coloredtextmarkup` was removed due to the game moving to native Ren'Py text markup functionality. This means:
 
 - ``{Pink}`` must be closed with ``{/Pink}``.
 - ``{StoredColor}`` and its variants end with ``{/StoredColor]``.
 - ``{color}`` can only end with ``{/color}`` and can't accept ``{ColorEnd}`` anymore.

**Planned Deprecations**
-------------------------

- :ref:`ChangeImageForFunc`, replaced by :ref:`ChangeImageLayer`. Threshold has not stated a planned version for removal.
