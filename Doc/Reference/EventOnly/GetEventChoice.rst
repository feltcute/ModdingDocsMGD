.. _Get Event Choice:

**Get Event Choice**
=====================

.. note::

  See :ref:`Choice` for Choice functions within event files.

**GetEventAndIfChoice**
--------------------------
Check an events choices and check if the choice matches, if so, jump to scene.

::

  "GetEventAndIfChoice", "EventNameHere", "3", "The choice", "SceneToJumpToHere"

**GetEventAndSetChoice**
-------------------------
Gets an event, and sets the specified choice to the given string.

::

  "GetEventAndSetChoice", "EventNameHere", "1", "The new set choice."

.. _ChoiceToDisplayFromOtherEvent:

**ChoiceToDisplayPlayerFromOtherEvent & ChoiceToDisplayMonsterFromOtherEvent**
-------------------------------------------------------------------------------
``"ChoiceToDisplayPlayerFromOtherEvent"`` & ``"ChoiceToDisplayMonsterFromOtherEvent"`` grabs the specified choice from an external event's string value for
the :ref:`Text Markup` specified below, and is not reset until it is called again, so it will affect other events. Thus, it should be called at the start
of a scene or event.

Both are exactly the same, each function simply titled with the intention as either being used for setting a nickname for the player or monster. Or even
giving the Monster a different name in dialogue, say, giving a generic monster in an event an actual name. They could be used for other purposes.

::

  "ChoiceToDisplayPlayerFromOtherEvent", "EventName", "1"

``{displayPlayerChoice}`` and ``{displayMonsterChoice}`` in :ref:`Event Text Markup` is the markup to utilize the functions.

See :ref:`ChoiceToDisplay` for doing it within the same event.

.. _SetChoiceToPlayerNameFromOtherEvent:

**SetChoiceToPlayerNameFromOtherEvent**
----------------------------------------
Sets the selected choice to the player’s name in another event. For the above functions.

::

  "SetChoiceToPlayerNameFromOtherEvent", "EventName", "1"

See :ref:`SetChoiceToPlayerName` for doing it within the same event.
