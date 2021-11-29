**Player Combat Afflictions**
==============================

.. tip::

  See :doc:`Player Afflictions </Doc/Reference/General/PlayerAfflictions>` for afflictions that can be applied out of combat.

.. _DenyPlayerOrgasmFunc:

**DenyPlayerOrgasm**
-----------------------
The player is immune to normal orgasm calls (e.g. ``"PlayerOrgasm"`` still works) for the entire round of combat.

Also see :ref:`DenyCombatOrgasm`.

----

.. _HitPlayerWithFunc:

**HitPlayerWith**
------------------
Hit the player with a skill.
Will not apply stances or status effects from the skill, and does apply recoil damage.
It will only damage to the target, and can crit. It will never miss. Uses the focused monsters stats.
**Do not use any skill with a** :ref:`targetTypeCreation` **that isn't** ``"single"``.

.. code-block:: javascript

  "HitPlayerWith", "Caress"

Displaying dialogue has to be done manually, it will not take dialogue from the skill.
If you want to display the damage number from the skill, use {DamageToPlayer} in the following string after completing the function.

Check :ref:`DamagePlayerFromMonsterFunc` for an out of combat equivalent.
Check :ref:`DamageMonsterFromMonsterFunc` for an in of combat way to hit monsters with another monster.

----

**SkipPlayerAttack**
---------------------
Skips the players attack. Specifically intended for use with :ref:`Counters`. This also prevents the player from consuming the skill :ref:`costType<costType>`, and using consumables.
