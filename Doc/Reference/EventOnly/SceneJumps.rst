.. meta::
    :keywords: jumptorandomscene jumptorandom call

.. _Scene Jumps:

**Scene Jumps**
================

.. seealso:: 

  For making jumps to scenes in other events, see :ref:`Event Jumps`.

**JumpToScene**
----------------
Goes to scene stated in the next string. Scenes are contained within an event,
see :ref:`Event Jumps` for jumping to specific scenes outside of the event.

.. code-block:: javascript

  "JumpToScene", "SceneNameHere"

**JumpToRandomScene**
----------------------
Goes to one of the listed scenes at random. Close with ``"EndLoop"``. You can repeat a scene in the listing to make it more likely.

.. code-block:: javascript

  "JumpToRandomScene",
    "SceneName1",
    "SceneName2",
    "SceneName3",
    "SceneName4",
  "EndLoop"

Can also use :ref:`Requirement Sub-Functions` and :ref:`Displayed Requirement Sub-Functions` (though they aren't displayed in this case),
to weight or filter choices based on conditions.

.. code-block:: javascript

  "JumpToRandomScene",
    "RequiresChoice", "1", "SceneName1",
    "SceneName2",
    "SceneName3",
  "EndLoop"

.. _CallSceneThenReturn:

**CallSceneThenReturn**
------------------------
Allows you to jump into a scene then return to where it was called initially.
These can be called inside each other as well. Exiting one of these calls is the same as ending an event, ensuring it eventually leads to a scene with no jumps.

.. code-block:: javascript

  "CallSceneThenReturn", "SceneNameHere"

See :ref:`CallEventAndSceneThenReturn` for jumping to specific scenes outside of the event.

| A note from Threshold:
|
|  *Be sure to end a call so it can return or weird shit will happen, like rewinding time. Check TimePassed.json or EndOfDay.json for examples of its use.*

----

**CallNextSceneJumpThenReturn**
--------------------------------
Turns the next scene jump into a call and return, just like ``"CallSceneThenReturn"``. Useful when in tandem with check based scene jump functions,
such as from :ref:`Player Checks` or :ref:`Monster Checks`.
The scene jump function must be given directly after ``"CallNextSceneJumpThenReturn"`` or it will expire.

.. code-block:: javascript

  "CallNextSceneJumpThenReturn",
  "IfFetishLevelEqualOrGreater", "Legs", "25", "SceneName"

**This is NOT to be used with event jumps.**
