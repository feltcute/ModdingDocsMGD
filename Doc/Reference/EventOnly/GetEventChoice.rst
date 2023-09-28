.. _Get Event Choice:

**Get Event Choice**
=====================

.. seealso:: 

  For Choice functions within event files, see :doc:`Choice </Doc/Reference/EventOnly/Choice>`.

**GetEventAndIfChoice**
--------------------------
Check an events choices and check if the choice matches, if so, jump to scene.

.. code-block:: javascript

  "GetEventAndIfChoice", "EventNameHere", "3", "The choice", "SceneToJumpToHere"

**GetEventAndSetChoice**
-------------------------
Gets an event, and sets the specified choice to the given string.

.. code-block:: javascript

  "GetEventAndSetChoice", "EventNameHere", "1", "The new set choice."

.. _ChoiceToDisplayFromOtherEventFunc:

**ChoiceToDisplayPlayerFromOtherEvent & ChoiceToDisplayMonsterFromOtherEvent**
-------------------------------------------------------------------------------
``"ChoiceToDisplayPlayerFromOtherEvent"`` & ``"ChoiceToDisplayMonsterFromOtherEvent"`` grabs the specified choice from an external event's string value for
the :doc:`Text Markup </Doc/Reference/Markup>` specified below, and is not reset until it's called again, so it will affect other events. Thus, it should be called at the start
of a scene or event.

Both behave the same, each function titled with the intention as either being used for setting a nickname for the player or monster. Or even
giving the Monster a different name in dialogue, say, giving a generic monster in an event an actual name. They could be used for other purposes.

.. code-block:: javascript

  "ChoiceToDisplayPlayerFromOtherEvent", "EventName", "1"

``[DisplayPlayerChoice]`` and ``[DisplayMonsterChoice]`` in :ref:`EventTextMarkup` is the markup to utilize the functions.

See :ref:`ChoiceToDisplayFunc` for doing it within the same event.

----

.. _SetChoiceToPlayerNameFromOtherEvent:

**SetChoiceToPlayerNameFromOtherEvent**
----------------------------------------
Sets the selected choice to the player's name in another event. For the above functions.

.. code-block:: javascript

  "SetChoiceToPlayerNameFromOtherEvent", "EventName", "1"

See :ref:`SetChoiceToPlayerNameFunc` for doing it within the same event.
