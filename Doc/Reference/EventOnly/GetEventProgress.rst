.. _Get Event Progress:

**Get Event Progress**
=======================

.. tip::

  See :ref:`Progress` for Progress functions within event files.

**GetEventAndChangeProgress**
------------------------------
Gets an event and changes its progress based on the given value. Can be negative.

::

  "GetEventAndChangeProgress", "Mysterious Inn", "2"

**GetEventAndSetProgress**
---------------------------
Gets an event and sets its progress to the given value. Can be negative.

::

  "GetEventAndSetProgress", "Mysterious Inn", "10"

**GetAnEventsProgressThenIfEquals**
------------------------------------
Gets an event and then checks if it is equal to the provided value. If true, it jumps to the given scene.

::

  "GetAnEventsProgressThenIfEquals", "Mysterious Inn", "5", "SceneNameHere"

**GetAnEventsProgressThenIfEqualsOrGreater**
---------------------------------------------
Gets an event and then checks if it is equal or greater to the provided value. If true, it jumps to the given scene.

::

  "GetAnEventsProgressThenIfEquals", "Mysterious Inn", "5", "SceneNameHere"

**GetAnEventsProgressThenIfEqualsOrLess**
------------------------------------------
Gets an event and then checks if it is equal or greater to the provided value. If true, it jumps to the given scene.

::

  "GetAnEventsProgressThenIfEquals", "Mysterious Inn", "5", "SceneNameHere"

**Cross-Event Comparators**
----------------------------
Following three functions are for very specific compare even progress scene jumpers. They all work the same, but do change in how it's decided.

**EventsProgressEqualsOtherEventsProgress**,
"""""""""""""""""""""""""""""""""""""""""""""
Will check the first event specified to see if its progress is equal to the event in the next string.
If true, it will jump to the given scene.

::

  "GetAnEventsProgressThenIfEqualsOrLessThanOtherEventsProgress", "'Bon Bon Bun'", "'Perpetua's Lemonade Stand'", "SceneNameHere"

**IfEventsProgressEqualsOrLessThanOtherEventsProgress**
"""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Will check the first event specified to see if its progress is
equal or less than the event in the next string. If true, it will jump to the given scene.

::

  "GetAnEventsProgressThenIfEqualsOrLessThanOtherEventsProgress", "'Bon Bon Bun'", "'Perpetua's Lemonade Stand'", "SceneNameHere"

**EventsProgressEqualsOrGreaterThanOtherEventsProgress**,
""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
Will check the first event specified to see if its progress is
equal or greater than the event in the next string. If true, it will jump to the given scene.

::

  "GetAnEventsProgressThenIfEqualsOrLessThanOtherEventsProgress", "'Bon Bon Bun'", "'Perpetua's Lemonade Stand'", "SceneNameHere"
