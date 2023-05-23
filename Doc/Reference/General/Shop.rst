**Shop**
=========


**SkillShoppingMenu**
----------------------

Opens a skill purchasing menu based on the provided skills, up till ``"EndLoop"``.
Good whitespace formatting is highly recommended for sanity, see how skill shops in the base game are done.


.. code-block:: javascript

  "SkillShoppingMenu",
      "Dildo", "Whip", "Bondage Net", "Lewd Bottle",
  "EndLoop",

``"PurchasesToProgress"`` can be added to make any purchases to increase the progress of the current event.
Selling has no effect.

.. code-block:: javascript

  "SkillShoppingMenu", "PurchasesToProgress",
      "Golden Elixir", "Lucky Jelly", "Luxury Lotion",
  "EndLoop",

----

**ShoppingMenu**
-----------------

Opens a shop menu based on the provided items, up till ``"EndLoop"``.
Good whitespace formatting is highly recommended for sanity, see how shops in the base game are done.

PurchasesToProgress can be added to anywhere an item could be to make any purchases add to the current events progress. Selling has no effect.

.. code-block:: javascript

 "ShoppingMenu",
 "Calming Potion", "Soothing Potion", "Energy Potion",
 "Anaph Rune", "Frog Rune",
 "EndLoop"

If you wish to only give players the ability to sell times, all you have to do is not include any items in the function.

.. code-block:: javascript

  "ShoppingMenu",
  "EndLoop"
