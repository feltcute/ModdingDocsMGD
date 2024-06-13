.. meta::
    :keywords: ifhas ifstatus ifstatuseffect

.. _Player Checks:

**Player Checks**
==================

.. seealso::

    For checks exclusive to combat, see :ref:`Player Combat Checks`.

**StatEqualsOrMore**
-----------------------
Checks the following stat against the given number, if the stat is equal or higher, it jumps to the scene, else it continues. See :ref:`Stats`.

.. code-block:: javascript

  "StatEqualsOrMore", "Power", "5", "SceneNameHere"

----

**HasErosLessThan**
--------------------
If player has less eros than the given amount, it jumps to the scene, else it continues.

.. code-block:: javascript

  "HasErosLessThan", "100", "SceneNameHere"

----

**VirilityEqualsOrGreater**
----------------------------
If the player virility is greater than the given number, it jumps to the scene, else it continues.

.. code-block:: javascript

  "VirilityEqualsOrGreater", "100", "SceneNameHere"

----

**IfPlayerOrgasm**
-------------------
Checks if the players current arousal is over their maximum arousal. If true, it then goes to the given scene, else it continues.

.. code-block:: javascript

    "IfPlayerOrgasm", "SceneNameHere"

----

**IfPlayerArousalOverPercentOfMax**
------------------------------------
Checks if the players current arousal is over a certain percent of their maximum arousal. If true, it jump to the given scene, else it continues.

Note you can go over 100%, though it might be superseded by an orgasm call when used while in combat if it isn't per-preemptive.

.. code-block:: javascript

  "IfPlayerArousalOverPercentOfMax", "50", "SceneNameHere"

----

**IfPlayerSpiritGone**
-----------------------
Check if the player is out of spirit, if true, it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfPlayerSpiritGone", "SceneNameHere"

----

**IfPlayerEnergyGone**
-----------------------
Same as above, but for the player's energy.

.. code-block:: javascript

  "IfPlayerEnergyGone", "SceneNameHere"

----

**IfPlayerEnergyLessThanPercent**
----------------------------------
Checks if the player energy is less than the given percentage of their maximum, if true, it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfPlayerEnergyLessThanPercent", "50", "SceneNameHere"

----

**IfSensitivityEqualOrGreater**
--------------------------------
Checks if the given sensitivity for the player is equal to or greater than the given value. If true, it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfSensitivityEqualOrGreater", "Sex", "120", "SceneNameHere"

----

**IfHasFetish**
----------------
Checks if the player has the following fetish (which requires being level 25 or higher), if true, it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfHasFetish", "Oral", "SceneNameHere"

----

**IfFetishLevelEqualOrGreater**
--------------------------------
Checks if the player has an equal or greater level of the given fetish, if true, it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfFetishLevelEqualOrGreater", "Ass", "60", "SceneNameHere"

----

**IfHasSkill**
---------------
Checks if the player has the following skill. If true, it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfHasSkill", "Arousara", "SceneNameHere"

----

**IfHasSkills**
---------------
Takes a list of skills the play can have, and if all is true it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfHasSkills", "Dildo", "Bondage Net", "EndLoop", "SceneNameHere",

----

.. _itemFunctions:

**IfHasItem & IfDoesntHaveItem**
---------------------------------
Checks if the player does or doesn't respectively have an item in their inventory or equipped.
**Supports checking for :ref:`Item Tags <itemTags>` instead of specific items.**

.. code-block:: javascript

  "IfHasItem", "Vandal's Note", "SceneNameHere"

.. code-block:: javascript

  "IfDoesntHaveItem", "Tags", "Collar", "Venefica's Confectioneries", "EndLoop", "SceneNameHere"

----

**IfHasItems & IfDoesntHaveItems**
------------------------------------
Takes a list of items that the player has equipped or in their inventory, and if all are found or not found respectively, it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfHasItems", "Anaph Herb", "Ardor Potion", "EndLoop", "SceneNameHere",

.. code-block:: javascript

  "IfDoesntHaveItems", "Anaph Herb", "Ardor Potion", "EndLoop", "SceneNameHere",


----

**IfHasItemEquipped  & IfDoesntHaveItemEquipped**
--------------------------------------------------
Checks if the player does or does not respectively have the specified item equipped. If true, it jumps to the given scene, else it continues.
**Supports checking for :ref:`Item Tags <itemTags>` instead of specific items.**

.. code-block:: javascript

  "IfHasItemEquipped", "Hero's Cape", "SceneNameHere"

.. code-block:: javascript

  "IfDoesntHaveItemEquipped", "Tags", "Sofia's Rewards", "Camilla's Secret", "EndLoop", "SceneNameHere"

----

**IfHasRunesEquipped**
--------------------------------------------------------
Checks if the player does or does not respectively have equal to or more of the specified amount of the given rune equipped. If true, it jumps to the given scene, else it continues.
**Supports checking for :ref:`Item Tags <itemTags>` instead of specific items.**

.. code-block:: javascript

  "IfHasRunesEquipped", "Heart Rune", "2", "SceneNameHere",
  "IfHasRunesEquipped", "Tags", "Graffiti Queen", "EndLoop", "1", "SceneNameHere"

----

**IfHasItemInInventory & IfDoesntHaveItemInInventory**
--------------------------------------------------------
Checks if the player does or does not respectively have equal to or more of the specified amount of the given item in their inventory, ignoring their equipment slots. If true, it jumps to the given scene, else it continues.
**Supports checking for :ref:`Item Tags <itemTags>` instead of specific items.**

.. code-block:: javascript

  "IfHasItemInInventory", "Anaph Herb", "1", "SceneNameHere"

.. code-block:: javascript

  "IfDoesntHaveItemInInventory", "Tags", "Healing", "Combat", "EndLoop", "1", "SceneNameHere"

----

**IfHasPerk**
--------------
Checks if the player has the following perk. If true, it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfHasPerk", "Sadist", "SceneNameHere"

----

**IfPlayerLevelGreaterThan**
-----------------------------
Checks if the player level is equal or greater than the specified amount. If true, it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfPlayerLevelGreaterThan", "50", "SceneNameHere"

----

**IfInExploration**
--------------------
If the player is in Exploration via the Grimoire, rather than an Adventure. If true, it jumps to the given scene, else it continues.

.. code-block:: javascript

  "IfInExploration", "SceneNameHere"

----

**IfRanAway**
--------------------
If the player has just run away from combat, if true, jump to the given scene, else it continues.

.. code-block:: javascript

  "IfRanAway", "SceneNameHere"

----

**IfPlayerHasStatusEffect & IfPlayerDoesntHaveStatusEffect**
-------------------------------------------------------------
If the player does or doesn't respectively have *any* of the specified status effects, jumps to the given scene. 

Providing ``"RequireAll"`` prior to listing any status effects will make it only match if the player does or doesn't respectively have *all* given status effects.

Please keep in mind :ref:`Time` will eliminate non-persistent status effects. See :ref:`Status Effect`.

.. code-block:: javascript

  "IfPlayerHasStatusEffect", "RequireAll", "Restraint", "Charm", "SceneNameHere",
  "IfPlayerHasStatusEffect", "Restraint", "Charm", "AnotherSceneNameHere"

----

**IfPlayerHasStatusEffectWithPotencyEqualOrGreater**
-----------------------------------------------------
Checks the player for a single status effect with the given amount of potency. 
Note not all status effects use potency, see :ref:`Status Effect`.

.. code-block:: javascript

  "IfPlayerHasStatusEffectWithPotencyEqualOrGreater", "Trance", "11", "SceneNameHere"

----

**IfDifficultyIs**
--------------------
Checks the current difficulty of the playthrough, of the three possible ``"Easy"``, ``"Normal"``, and ``"Hard"`` difficulties you can give. 
If true, jumps to the given scene.


.. code-block:: javascript

  "IfDifficultyIs", "Hard", "SceneNameHere"
