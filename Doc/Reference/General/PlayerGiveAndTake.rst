**Player Give & Take**
=======================

.. _GiveExp:

**GiveExp**
------------
Despite its name, flatly alters the amount of exp the player has. This means it can both remove and give exp, depending on if you give a negative
or positive value respectively. After altering the exp, it checks to see if the player can level up.

::

  "GiveExp", "96",
  "GiveExp", "-43"

**GiveItem & GiveItemQuietly**
-------------------------------
Despite its name, ``"GiveItem"`` changes the specified amount of the following item that the player owns. This means it can both remove and give items, depending on if
you give a negative or positive value respectively. You are free to remove as much of the given item as you please, it will not cause any technical issues.

::

  "GiveItem", "1", "Calming Potion"

``"GiveItemQuietly"`` does the same, but does not notify the player.

::

  "GiveItemQuietly", "-1", "Calming Potion"

**GiveSkill & RemoveSkillFromPlayer**
--------------------------------------
Using ``"GiveSkill"`` gives player a skill if they don’t have it already.

::

  "GiveSkill", "Caress"

``"RemoveSkillFromPlayer"`` does the opposite, taking away a skill if they have it. ``"RemoveSkillFromPlayerQuietly"`` can be used to do it without notifying the player.


::

  "RemoveSkillFromPlayer", "Caress"

An example use case would be to remove skills at the end of combat you gave to the player at the start of combat. Say, a gimmick skill specific to the fight.

**GiveSkillQuietly & RemoveSkillFromPlayerQuietly**
----------------------------------------------------

``"GiveSkillQuietly"`` & ``"RemoveSkillFromPlayerQuietly"`` are, as expected, quiet variants of the above functions that won't notify the player.


**GivePerk & RemovePerk**
--------------------------
Using ``"GivePerk"`` gives the player a perk, even if they already have it. ``"RemovePerk"`` doing the opposite.

::

  "GivePerk", "Pacing",
  "RemovePerk", "Pacing"

**GivePerkQuietly & RemovePerkQuietly**
----------------------------------------
``"GivePerkQuietly"`` & ``"RemovePerkQuietly"`` are, as expected, quiet variants of the above functions that won't notify the player.
