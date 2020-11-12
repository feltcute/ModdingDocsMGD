.. _Change Monster:

**Change Monster**
===================

.. tip::

  See :ref:`Monster Combat Afflictions` for functions that only work while in combat.

**ChangeMonster Functions**
----------------------------
Changes the given stat of the focused monster by the given amount.
They can take negative values, and it does reset upon leaving the event and/or encounter. These do not produce dialogue.

* ``"ChangeMonsterLevel"``
* ``"ChangeMonsterErosDrop"``
* ``"ChangeMonsterExpDrop"``
* ``"ChangeMonsterMaxSpirit"``
* ``"ChangeMonsterMaxArousal"``
* ``"ChangeMonsterMaxEnergy"``
* ``"ChangeMonsterPower"``
* ``"ChangeMonsterWill"``
* ``"ChangeMonsterTech"``
* ``"ChangeMonsterAllure"``
* ``"ChangeMonsterLuck"``
* ``"ChangeMonsterInt"``

::

  "ChangeMonsterMaxSpirit", "2"

**ChangeMonsterSensitivity**
-----------------------------
Changes the given sensitivity by specified amount for the focused monster.
They can take negative values, and it does reset upon leaving the event and/or encounter. These do not produce dialogue.

::

  "ChangeMonsterSensitivity", "Pain", "20"

**ChangeMonsterStatusEffectResistances**
-----------------------------------------
Changes the given status effect resistance by specified amount for the focused monster.
They can take negative values, and it does reset upon leaving the event and/or encounter. These do not produce dialogue. See :ref:`Resistances`

::

  "ChangeMonsterStatusEffectResistances", "Sleep", "20"

**ChangeMonsterFetish**
------------------------
Changes the given fetish by the specified level amount for the focused monster.
They can take negative values, and it does reset upon leaving the event and/or encounter. These do not produce dialogue.

::

  "ChangeMonsterFetish", "Cock", "4"

**GivePerkToMonster & RemovePerkFromMonster**
----------------------------------------------
Gives or removes the perk respectively from the focused monster. Can give duplicates.
It does reset upon leaving the event and/or encounter. These do not produce dialogue.

::

  "GivePerkToMonster", "PerkName"

**GiveSkillToMonster & RemoveSkillFromMonster**
------------------------------------------------
Gives or removes the skill respectively from the focused monster. Can give duplicates to increase chances.
It does reset upon leaving the event and/or encounter. These do not produce dialogue.

::

  "GiveSkillToMonster", "SkillName"


**ClearMonsterPerks & ClearMonsterSkillList**
----------------------------------------------
Clears the focused monster's perk or skill list respectively, in case you want to rebuild their entire skill list or perks in the middle of combat.
It does reset upon leaving an encounter. These do not produce dialogue.
