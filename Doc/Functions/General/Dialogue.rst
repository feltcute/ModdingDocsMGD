**Dialogue**
=============

.. seealso:: 

  For :ref:`SpeakersCreation` specific functions, see the page :doc:`Speakers Specific </Doc/Functions/EventOnly/SpeakersSpecific>`.

**PlayerSpeaks**
-----------------

Puts the player name in the text box header for the next string.

.. code-block:: javascript

  "PlayerSpeaks",
    "I don't get to talk very often."

----

**PlayerSpeaksSkill - Combat Only**
------------------------------------

Generally for use in combat events where the skill name is called still, and quotation marks are needed to be removed.

.. code-block:: javascript

  "PlayerSpeaksSkill",
    "I don't get to talk very often."

----

.. _SpeakFunc:

**Speak**
----------

Displays the given text in the text box header for the following string of text. Doesn't need to be in ``"Speaker":``, see :ref:`SpeaksFunc` for that.

.. code-block:: javascript

  "Speak", "Elena and Elly",
    "Paperwork sucks!"

----

.. _SetStoredColor:

**SetStoredColor**
-------------------

A given numerical value from 1-7 will set the corresponding :ref:`coloredtextmarkup` ``[StoredColor]``
to use the colored specific in the next string value of text.
Can be repeated for every variant of ``[StoredColor]``.

Can instead provide a value of ``"Reset"`` to reset all stored colors back to their defaults.

.. code-block:: javascript

  "SetStoredColor", "1", "#fe0000", "5", "#c21196"
  "[StoredColor]This is red,[StoredColor5] and this is purple.[ColorEnd], this is back to red[ColorEnd], and this is back to normal."
  "SetStoredColor", "Reset",
  "[StoredColor] This is now the default pink.[ColorEnd]"

See :ref:`coloredtextmarkup` for more information on ``[StoredColor]``.

.. tip:: 

  You can make use of :ref:`callscenethenreturn` or :ref:`callscenethenreturn` to cleanly set all the colors in a dedicated scene at any point.

**SaveNextLine, UseSavedLineInMenu, & DisplaySavedLine**
----------------------------------------------------------

Using ``"SaveNextLine"`` saves the next line that’s going to be displayed. Will then automatically be displayed during the next :ref:`MenuFunc`.
This normally does happen already, but can be useful for more complex cases. See the logic for the Will-Power Temple's random encounters as an example.

``"DisplaySavedLine"`` will display the current saved line manually.
Was originally intended for the displaying with menus, but didn't work as intended. It was left it in just in case.

``"UseSavedLineInMenu"`` will display the saved line in a menu upon returning to it, where it'd otherwise not change or display anything at all.
See the logic for the Will-Power Temple's navigation as an example.
