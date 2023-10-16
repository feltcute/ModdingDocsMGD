**Attacker**
==============

.. seealso::

    For functions attacking the player, see :doc:`Monster Attacks </Doc/Functions/CombatOnly/MonsterAttack>`, and :doc:`Player Combat Afflictions </Doc/Functions/CombatOnly/PlayerCombatAfflictions>`

    For functions attacking the monster, see :doc:`Monster Combat Afflictions </Doc/Functions/CombatOnly/MonsterCombatAfflictions>`.

**IfAttackCrits**
------------------

``"IfAttackCrits"`` will check if the attacker from the last source of skill damage managed to Crit. If true, it will jump to the given scene.

Note this counts for both monsters and players, and also works with combat functions applying damaging skills.

Meant to be used with combat events called by :ref:`CallCombatEventAndScene` within skills.

.. code-block:: javascript

    "IfAttackCrits", "SceneNameHere"