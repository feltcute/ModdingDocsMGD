.. meta::
    :keywords: callevent call

.. _Event Jumps:

**Event Jumps**
================

.. Ask thresh about the differences between all the event jumps as they are used rather inconsistently.

.. tip::

  See :ref:`Scene Jumps` for making jumps to scenes within an event.

**JumpToEvent**
----------------
Goes to an event stated in the next string. Remember that it will pick the first scene listed by default.

::

  "JumpToEvent", "EventNameHere"

**JumpToNPCEvent**
"""""""""""""""""""
Goes to the event stated in the next string, used for events from the town.

.. Deprecated?

::

  "JumpToNPCEvent", "EventNameHere"

**JumpToLossEvent**
""""""""""""""""""""
Goes to the event stated in the next string, used for event loss scenes.

.. Deprecated?

::

  "JumpToLossEvent", "EventNameHere"

.. _JumpToEventThenScene:

**JumpToEventThenScene**
-------------------------
Goes to an event, then a scene via the two following strings. Useful when you want to avoid it going to the first scene in an event.
**Note that it will leave combat encounters.**

::

  "JumpToEventThenScene", "EventNameHere", "SceneNameHere"

**CallCombatEventAndScene**
""""""""""""""""""""""""""""

Variant of ``"JumpToEventThenScene"``, but stays in in combat. Used for events with combat functions.

::

  "CallCombatEventAndScene", "EventNameHere", "SceneNameHere"


**JumpToNPCEventThenScene**
""""""""""""""""""""""""""""

.. Deprecated?

Variant of ``"JumpToEventThenScene"`` for town.

::

  "JumpToNPCEventThenScene", "EventNameHere", "SceneNameHere"

.. _CallEventAndSceneThenReturn:

**CallEventAndSceneThenReturn**
--------------------------------
Functions the same as :ref:`CallSceneThenReturn`, but allows you to call to another event, then scene.

::

  "CallEventAndSceneThenReturn", "EventNameHere", "SceneNameHere"
