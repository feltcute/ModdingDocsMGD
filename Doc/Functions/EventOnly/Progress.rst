.. meta::
    :keywords: ifprogress

.. _Progress:

**Progress**
=============

Progress is typically used to track relationship progress with characters, but it can be used for more technical purposes.

**By default, progress for all events start at 0.**

.. seealso::

  You can display progress via the ``[ProgressDisplay]`` :doc:`Text Markup </Doc/Reference/Markup>` . Also see :doc:`Get Event Progress </Doc/Functions/EventOnly/GetEventProgress>` for progress functions outside of the given file.

**SetProgress**
----------------
Will set the event's progress to the specified number. Can be negative.

.. code-block:: javascript

  "SetProgress", "0"

----

**ChangeProgress**
-------------------
Changes the events progress based on the given value. Can be negative.

.. code-block:: javascript

  "ChangeProgress", "5"

----

**ChangeProgressBasedOnVirility**
----------------------------------
Changes progress based on virility, with the following with the value in the following string being a multiplier.
Base number in the example translates to 0.1x scaling of the players virility total. So if the player has 100 virility, it will result in progress increasing by 10.

.. code-block:: javascript

  "ChangeProgressBasedOnVirility", "1"

Primarily designed for the blue balls system, but it can have other uses.

----

**IfProgressEquals**
---------------------
Checks if the progress of the event is equal to the following number. If true, it jumps to the given scene. If false, it's ignored.
Can be negative.

.. code-block:: javascript

  "IfProgressEquals", "10", "SceneNameHere"

----

**IfProgressEqualsOrGreater**
------------------------------
Works the same as the previous function, but is still true even if the event's value is greater than the checked value.
Can be negative.

.. code-block:: javascript

  "IfProgressEqualsOrGreater", "10", "SceneNameHere"

----

**IfProgressEqualsOrLess**
---------------------------
Same as the previous function, but instead is still true if the event's value is less than the checked value.
Can be negative.

.. code-block:: javascript

  "IfProgressEqualsOrLess", "10", "SceneNameHere"
