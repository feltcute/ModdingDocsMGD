.. _Status Effects:

.. _Status Effect:

**Status Effect Reference**
============================
This page is purely for ease of reference for functions and keys, and is not meant to contain any information on how each status effect works.
The information in-game, or on the `wiki <https://monstergirldreams.fandom.com/wiki/Monster_Girl_Dreams_Wiki>`_ should prove sufficient for that purpose.

Any status effect labeled 'persistent' means any tick of a step or a combat turn will not clear the status effect, but only trigger its duration or potency
to tick down. Status effects labeled 'non-persistent' means they will be immediately cleared upon taking a step or leaving combat.

**Any, None**
-------------
``"Any"`` and ``"None"`` can sometimes be called in certain cases to cover all types of status effects, or the lack of any status effect.
The documentation for relevant functions and keys will state whether these values are an option.

**Technical Status Effects**
-----------------------------
The following are inherently and technically, status effects, though aren't commonly remembered as such. They are specific to the player.

* ``"Surrender"`` (Non-persistent)
* ``"Defend"`` (Potency ranges from 1-3. Non-persistent)

**Soft Crowd Control**
-----------------------
* ``"Aphrodisiac"`` (Potency is variable. Persistent)
* ``"Charm"`` (Non-persistent)
* ``"Drowzy"`` (Stage prior to ``"Sleep"``, potency is variable. Non-persistent)
* ``"Restrain"`` (Non-persistent)

**Hard Crowd Control**
-----------------------
* ``"Hypnotized"`` (Potency 11 of ``"Trance"``. Persistent)
* ``"Paralysis"`` (Potency ranges from 1-10. Persistent)
* ``"Paralyzed"`` (Potency 10 of ``"Paralysis"``. Persistent)
* ``"Sleep"`` (Non-persistent)
* ``"Stun"`` (Non-persistent)
* ``"Trance"`` (Potency ranges from 1-11. Persistent)

.. _Buff Debuffs:

**Buffs & Debuffs**
--------------------
These all feature potency as well, directly being the final amount their modifier is given. They are all non-persistent.

* ``"Crit"``
* ``"Damage"``
* ``"Defence"``
* ``"Power"``
* ``"Technique"``
* ``"Intelligence"``
* ``"Allure"``
* ``"Willpower"``
* ``"Luck"``

For modifiers based on a percent of the target's max stat. As an example, a value of 100 given to a key is equal to 100% of their max stat.

* ``"%Power"``
* ``"%Technique"``
* ``"%Intelligence"``
* ``"%Allure"``
* ``"%Willpower"``
* ``"%Luck"``

.. note:: Currently, the game has no way to functionally differentiate buffs from debuffs for events and the likes. Threshold intends to address this in the future.

.. _Resistances:

**Status Effect Resistances**
------------------------------
Covers resistances relating to the above status effects. Positive values improve resistance, negative values decrease. Baseline of 0.

* ``"Aphrodisiac"``
* ``"Charm"``
* ``"Debuff"``
* ``"Restraints"``
* ``"Paralysis"``
* ``"Sleep"``
* ``"Stun"``
* ``"Trance"``
