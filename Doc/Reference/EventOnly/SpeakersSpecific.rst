**Speakers Specific**
=======================

.. note::

  This page contains functions in direct relation to the :ref:`SpeakersCreation` key. See the hyperlink for more information on the keys themselves.

  Additionally, see :doc:`Dialogue </Doc/Reference/General/Dialogue>` for functions independent of the :ref:`SpeakersCreation` key.

.. _DisplayCharactersFunc:

**DisplayCharacters**
----------------------
Shows each specified``"Speakers":`` image/card from a :doc:`Event </Doc/Events/Creation>`.

.. code-block:: javascript

  "DisplayCharacters",
    "1",
    "2",
  "EndLoop"

Instead of a number you can also use the nameID of that monster file to specify who you want to display, but they still must be listed in the ``"Speakers":``.

----

.. _SpeaksFunc:

**Speaks**
-----------
Puts the first character's name in the ``"Speakers":`` key in the next box for the next string.
Supplying a number in the function will make it move to the next character in ``"Speakers:"``.

Adding a numerical value directly at the end within the function will use the other speakers in the order their objects are included. Up to 12.

.. code-block:: javascript

  "Speaks2",
    "Are those imps?",
  "Speaks",
    "They're coming this way!",
  "Speaks7",
    "Hello it's me, an imp."


``"Speaks"`` is also capable of being used in :ref:`lossScenes and victoryScenes`, which will refer to the :doc:`Monster Creation </Doc/Monsters/Creation>`'s ``"name"`` key within the json.

.. code-block:: javascript

  "Speaks",
    "Wow I didn't know you could lift that many imps at once!",
  "Speaks2",
    "I didn't either someone help me."

----

**SetPostName**
----------------
Sets the end of a monsters name to a thing, can be used to make attack titles appear in events. Will affect all speakers, and persist for all ``"Speaks"`` calls until it is manually set blank.

.. code-block:: javascript

  "SetPostName", " – Fancy Attack Name!"

After the attack is performed...

.. code-block:: javascript

  "SetPostName", ""

----

**SetFlexibleSpeaker & FlexibleSpeaks**
----------------------------------------
Using ``"SetFlexibleSpeaker"`` sets a speaker to be used from the ``"Speakers":`` key whenever ``"FlexibleSpeaks"`` is called.

``"FlexibleSpeaks"`` otherwise works just like the ``"Speaks"`` function. Used for niche cases where you want to change the speaker, but not the entire scene.
See Manticore, Onis, or Shizu.

.. code-block:: javascript

  "SetFlexibleSpeaker", "2",
  "FlexibleSpeaks",
    "It's me, speaker2!",
  "SetFlexibleSpeaker", "3",
  "FlexibleSpeaks",
    "Now it's me, speaker3!"
