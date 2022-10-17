**Encounter**
==============

.. seealso:: 

  See :ref:`Pre-Combat` for information on starting an encounter, and :ref:`End Combat` on methods of ending an encounter.

**HideMonsterEncounter & ShowMonsterEncounter**
------------------------------------------------
``"HideMonsterEncounter"`` temporarily hides the encounter. It's still very much so in effect, just the visibility and selectibility of all currently displayed monsters
monsters from the encounter are gone. It's meant for combat events, but nothing stops you from using it elsewhere, just do take caution.
Using :ref:`DisplayCharactersFunc` for its duration of use intended.

It will continue to persist until ``"ShowMonsterEncounter"`` is called, showing the monsters in the encounter again.
Be sure to remove all monsters from :ref:`DisplayCharactersFunc` first before calling it to avoid visual oddities.

.. code-block:: javascript

  "HideMonsterEncounter",
  "DisplayCharacters", "1", "2", "4", "EndLoop"
  "... sometime later in another scene, or possibly another event...",
  "ShowMonsterEncounter",

----

**AddMonsterToEncounter**
--------------------------

``"AddMonsterToEncounter"``
Add the monster to the encounter.
Will renumber all the monsters in the encounter.
Can add infinitely, so make sure there's a check to stop it from going above three.
Is always added to the end of the encounter list.

.. code-block:: javascript

  "AddMonsterToEncounter", "Blue Slime"

**ChangeForm**
"""""""""""""""
``"ChangeForm"`` is used with AddMonsterToEncounter, switching out the currently focused monster with the given Monster.
Maintains arousal, spirit, stances, and status effects. See :ref:`Focus` for information on focus functions.

.. code-block:: javascript

  "AddMonsterToEncounter", "ChangeForm", "Imp"
