.. meta::
    :keywords: ifstatuseffect ifstatus

.. _Player Combat Checks:


**Player Combat Checks**
=========================
.. note::

  **All of the functions below only work in :doc:`Event </Doc/Events/Creation>` based .json files.**

.. seealso:: 

  For checks that can be used outside of combat, see :ref:`Player Checks`.

----

**IfPlayerHasStatusEffect & IfPlayerDoesntHaveStatusEffect**
-------------------------------------------------------------
If the player has this status effect, jump to the given scene. Can be used out of combat, but not many status effects maintain out of combat.
See :ref:`Status Effect`.

.. code-block:: javascript

  "IfPlayerHasStatusEffect", "Restraint", "SceneNameHere"

----

**IfPlayerHasStatusEffectWithPotencyEqualOrGreater**
-----------------------------------------------------
Similar to above except you can check the effect’s potency. Note not all status effects use potency, see :ref:`Status Effect`.

.. code-block:: javascript

  "IfPlayerHasStatusEffectWithPotencyEqualOrGreater", "Trance", "11", "SceneNameHere"

----

**IfPlayerStunnedByParalysis**
-------------------------------
If player is currently stunned by paralysis, jump to the given scene.

.. code-block:: javascript

  "IfPlayerStunnedByParalysis", "SceneNameHere"

----

**IfPlayerIsUsingThisSkill**
-----------------------------
If the player is using the skill this turn, jump to the given scene. For more advanced cases where :ref:`lineTriggers` isn't flexible enough. Check Sofia for it’s usage.

.. code-block:: javascript

  "IfPlayerIsUsingThisSkill", "Demon Layer", "Scene"
