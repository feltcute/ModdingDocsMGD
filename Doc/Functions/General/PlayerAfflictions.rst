**Player Afflictions**
=======================

.. seealso:: 

    For afflictions that can only be applied in combat, see :doc:`Player Combat Afflictions </Doc/Functions/CombatOnly/PlayerCombatAfflictions>`.

**SetArousalToXUnlessHigherThanX**
-----------------------------------

Sets the player arousal to the first specified numerical value, unless the current arousal is higher than the specified value.
This is mostly for cinematic purposes.

.. code-block:: javascript

  "SetArousalToXUnlessHigherThanX", "100"

----

**SetArousalToXUnlessHigherThanXThenAddY**
-------------------------------------------

Same as the above, but if the current arousal is higher than the specified value, it will add the second given value instead.
Also mostly for cinematic purposes.

.. code-block:: javascript

 "SetArousalToXUnlessHigherThanXThenAddY", "100", "50",

----

**SetArousalToMax**
--------------------

``"SetArousalToMax"`` sets the player's arousal to max. The player is not notified.

----

**ChangeArousal & ChangeArousalQuietly**
-----------------------------------------

Will flatly alter the player's current arousal with the specified number. Can be negative.

.. code-block:: javascript

  "ChangeArousal", "50"

``"ChangeArousalQuietly"`` can be used to change the player's arousal without notifying the player.

----

**ChangeEnergy & ChangeEnergyQuietly**
---------------------------------------

Same as the above, but for the players current energy. Note negative values subtract.

.. code-block:: javascript

  "ChangeEnergy", "-30"

``"ChangeEnergyQuietly"`` can be used to change the player's current energy without notifying the player.

----

**PlayerCurrentEnergyCost**
---------------------------------------

Removes energy from the player based on their currently used skill. This is for counter attack usage like the ghosts, where the skill technically still goes through despite skipping the attack itself.

----

**ChangeArousalByPercent & ChangeEnergyByPercent**
---------------------------------------------------

Changes players current amount of their arousal or energy respectively by a percent based on their maximum of the chosen stat. Can take negative values.
It does not notify the player.

.. code-block:: javascript

  "ChangeArousalByPercent", "-10"
  "ChangeEnergyByPercent", "10"

----

**SetSpirit**
--------------

Set the players current spirit to a number. It will be rounded to the maximum or 0 if the given number exceeds or is below respectively.

.. code-block:: javascript

  "SetSpirit", "1"

----

**ChangeSpirit & ChangeSpiritQuietly**
---------------------------------------

Changes the players current spirit by the given amount. Can take a negative value.
It will be rounded to the maximum or 0 if the given number exceeds or is below respectively.

.. code-block:: javascript

  "ChangeSpirit", "2"

``"ChangeSpiritQuietly"`` can be used to change the players current spirit without notifying them.

.. code-block:: javascript

  "ChangeSpiritQuietly", "-2"

----

.. _DamagePlayerFromMonsterFunc:

**DamagePlayerFromMonster**
----------------------------

Deal randomized damage to the player via a skill and monster, the monster chosen is used as a stat reference.
The skill chosen will not apply status effects. Displaying dialogue has to be done manually, it will not take dialogue from the skill.
If you want to display the damage number from the skill, use [DamageToPlayer] in the following string after completing the function.

.. code-block:: javascript

  "DamagePlayerFromMonster", "Imp", "Blowjob"

----

.. _DamageMonsterFromMonsterFunc:

**DamageMonsterFromMonster**
----------------------------

Deal randomized damage to the focused monster via a skill and called monster, the monster chosen is used as a stat reference and doesn't need to be in the active combat encounter.
The skill chosen will not apply status effects. Displaying dialogue has to be done manually, it will not take dialogue from the skill.
If you want to display the damage number from the skill, use `[DamageToEnemy]` in the following string after completing the function.

.. code-block:: javascript

  "DamageMonsterFromMonster", "Imp", "Arouse"

Check :ref:`HitPlayerWithFunc` for a combat only equivalent.

----

**ChangePerkDuration**
-----------------------

Changes the duration of the given perk the player possesses by the set amount. ``"6"`` would be a full day. See :ref:`TimeDurationType` for reference.

.. code-block:: javascript

    "ChangePerkDuration", "Rut", "9"

----

**ApplyStatusEffect**
----------------------

Applies a status effect to the player, specifically from skills. If used while in combat, it will utilize the focused monster's stats during application.
It cannot miss.

It's recommended to use skills made specifically for this when out of combat, as it can’t fetch enemy information and use it to impact the status effect.

.. code-block:: javascript

  "ApplyStatusEffect", "Drugged Food"

----

**RemoveStatusEffect**
-----------------------

Removes the specified status effect, not the skill used to apply it from the above function.

.. code-block:: javascript

   "RemoveStatusEffect", "Stun"

You can choose from any within :ref:`Status Effects`.

----

**ClearNonPersistentStatusEffects**
------------------------------------

``"ClearNonPersistentStatusEffects"`` clears non-persistent status effects, and perks with the perk type :ref:`NonPersistentEffectType`.

For clarity on persistent and non-persistent status effects, see :doc:`Status Effects </Doc/Reference/StatusEffectRef>`.

----

**ClearPlayerStatusEffects**
-----------------------------

``"ClearPlayerStatusEffects"`` clears the player of all currently applied status effects.

----

**RefreshPlayer**
------------------

``"RefreshPlayer"`` fully heals the player and removes all currently applied status effects.

----

**HoldCurrentVirility**
------------------------

Using ``"HoldCurrentVirility"`` grabs the current virility of the player and uses it for all checks until ``"HoldCurrentVirilityEnd"`` is called.
Persists across events and scenes.

.. code-block:: javascript

  "HoldCurrentVirility",
  "... At a later scene or event..."
  "HoldCurrentVirilityEnd",

----

**PlayerOrgasm**
-----------------

Forces the player to cum, resets arousal to zero, then lowers spirit by set amount. Displays no text/feedback.

.. code-block:: javascript

  "PlayerOrgasm", "1"

----

**PlayerOrgasmNoSpiritLoss**
-----------------------------

``"PlayerOrgasmNoSpiritLoss"`` causes the player to orgasm, reseting current arousal, but they don't lose spirit.
Used primarily to trigger relevant status effects and events where losing spirit is not desired from a design perspective, such as victory scenes.

----

.. _EmptySpiritCounterFunc:

**EmptySpiritCounter**
-----------------------------

``"EmptySpiritCounter"`` for specific uses when looping orgasm text/events in a row during an event (:ref:`EventTextMarkup`) and displaying spirit lost in events so it doesnt stack itself in the display.
