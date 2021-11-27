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

.. code-block:: javascript

  "JumpToEvent", "EventNameHere"

----

**JumpToNPCEvent**
"""""""""""""""""""
Goes to the event stated in the next string, used for events from the town.

.. Deprecated?

.. code-block:: javascript

  "JumpToNPCEvent", "EventNameHere"

----

**JumpToLossEvent**
""""""""""""""""""""
Goes to the event stated in the next string, used for event loss scenes.

.. Deprecated?

.. code-block:: javascript

  "JumpToLossEvent", "EventNameHere"

----

.. _JumpToEventThenSceneFunc:

**JumpToEventThenScene**
-------------------------
Goes to an event, then a scene via the two following strings. Useful when you want to avoid it going to the first scene in an event.
**Note that it will leave combat encounters.**

.. code-block:: javascript

  "JumpToEventThenScene", "EventNameHere", "SceneNameHere"

----

**CallCombatEventAndScene**
""""""""""""""""""""""""""""

Variant of ``"JumpToEventThenScene"``, but stays in in combat. Used for events with combat functions.

.. code-block:: javascript

  "CallCombatEventAndScene", "EventNameHere", "SceneNameHere"

----

**JumpToNPCEventThenScene**
""""""""""""""""""""""""""""

.. Deprecated/Dated name?

Variant of ``"JumpToEventThenScene"`` for town.

.. code-block:: javascript

  "JumpToNPCEventThenScene", "EventNameHere", "SceneNameHere"

----

.. _CallEventAndSceneThenReturnFunc:

**CallEventAndSceneThenReturn**
--------------------------------
Functions the same as :ref:`CallSceneThenReturn`, but allows you to call to another event, then scene.

.. code-block:: javascript

  "CallEventAndSceneThenReturn", "EventNameHere", "SceneNameHere"
