.. _Stances:

**Stances**
============

.. tip::
    See :doc:`Stance Reference </Doc/Reference/StanceRef>` for information on the stances featured in the game.

**ApplyStance**
----------------
Applies the stance to the player and the currently focused monster.
Be sure to have a check for stance before this so you don’t reapply the stance a second time. Or more.

.. code-block:: javascript

  "ApplyStance", "Kissing"

Note that out of combat stance calls, as well as :ref:`Counters` and :ref:`EndOfRound` calls need to have the skill manually set for the fetish check.
Or else, it may use the players skill for the fetish application to stance durability. This done be done via the sub-function ``"SetAttack"``.

.. code-block:: javascript

  "ApplyStance", "Anal", "SetAttack", "Assjob",

----

**ApplyStanceToOtherMonster**
------------------------------
Applies the specified stance to the given monster with the player.
Will ignore the focused monster.
Will not apply stance to a monster who already has the stance.
Will shift focus to the given monster.

.. code-block:: javascript

  "ApplyStance", "MonsterName", "Kissing"

----

**ClearStanceFromMonsterAndPlayer**
------------------------------------
Remove the specified stance from focused monster and the player.
Can state ``"All"`` instead of a stance to remove all currently active stances the player has with the focused monster.

.. code-block:: javascript

  "ClearStanceFromMonsterAndPlayer", "Sex"

----

**IfPlayerHasStance & IfPlayerDoesntHaveStance**
-------------------------------------------------
Checks if the player does or does not have this stance with anyone respectively. You can also provide a value of ``"Any"`` or ``"None"``.

.. code-block:: javascript

  "IfPlayerHasStance", "Kissing", "SceneNameHere"

  "IfPlayerDoesntHaveStance", "Anal", "SceneNameHere"

----

**IfPlayerHasStances**
-----------------------
Checks the player for every specified stance in the loop. If all stances are true, it jumps to the given scene.

.. code-block:: javascript

  "IfPlayerHasStances", "Making Out", "Sex", "EndLoop", "SceneNameHere",

----

**IfMonsterHasStance & IfMonsterDoesntHaveStance**
---------------------------------------------------
Works same as the player variants, but checks for the focused monster instead.

----

**IfOtherMonsterHasStance and IfOtherMonsterDoesntHaveStance**
---------------------------------------------------------------
Similar to above, but checks for the specified monster.
Will ignore the focused monster.
Will not apply stance to a monster who already has the stance.
Will shift focus to the given monster.

.. code-block:: javascript

  "IfOtherMonsterHasStance", "Slime", "Slimed 100%", "SceneNameHere"

----

**ClearStances**
-----------------
Clears the stances of everyone in the encounter.
