.. _Locations:

**Location Creation**
======================

Breaks down the :doc:`keys and strings </Doc/Starter/TheJsonFormat>` used by Locations.

Go to *Json/Locations/*, and then see the .json files present for examples, and **_TestLocation.json** for a template.

.. If you have installed snippets, you can type .*blank* to instantly create a location snippet.

Assume all keys are required, unless stated otherwise.

**name**
---------

.. code-block:: javascript

  "name": "Location name",

Sets the internal name of the location, meant only for internal referral in other keys and functions.
Do try to provide a fairly non-generic value to prevent potential overlap issues with other locations.

**exploreTitle**
-----------------

.. code-block:: javascript

  "exploreTitle": "A Fancy Place",

The cosmetic name displayed on the map screen. This doesn't need to be unique, and therefore doesn't technically have to match the ``"name":`` key.

**MusicList**
--------------

.. code-block:: javascript

    "MusicList": [ "music/Forest/hitoriame.mp3", "Json/ModName/BGM/NineJackButFasterEvery4s.mp3"],

An optional key for a default selection of music to loop through outside of events and encounters.

**picture**
------------

.. code-block:: javascript

    "picture": "forest.png"

The background image to be used at the location when exploring and adventuring.

**mapIcon**
------------

.. code-block:: javascript

  "mapIcon": "",

  "mapIconXpos": "0",

  "mapIconYpos": "0",

  "mapIconZorder": "0",

``"mapIcon":`` will utilize the filepath you provide it to add your location to the map.

``"mapIconXpos":`` and ``"mapIconYpos":`` offset the position of the location on the map. Not typically used in favor of making a 1920x1080 transparent .png and simply placing
the map icon accordingly to where it'd appear on the map.

``"mapIconZorder":`` is for instances where there is possible overlap with other icons. This is useful for situations where you have intentionally overlapping locations, say,
a building icon inside a larger forest icon.

You can technically go without providing a file for ``"mapIcon":`` and simply leave it blank, in which case it'll simply present a button for the user to press on the map.
This is not recommended as it has the potential to inadvertently block access to other locations using ``"mapIcon":``.

**mapClouds**
--------------

.. code-block:: javascript

  "mapClouds": "",

  "mapCloudsXpos": "0",

  "mapCloudsYpos": "0",

``"mapClouds":``  will utilize the filepath you provide it to provide a cover for your location till the requirements are unlocked.

.. Verify the mod compatibility issue of modded locations being set in non-early game areas where it might clip the vanilla clouds before submission.

``"mapCloudsXpos":`` and ``"mapCloudsYpos":`` offset the position of the clouds on the map. Not typically used in favor of making a 1920x1080 transparent .png and simply placing
the clouds accordingly to where it'd appear on the map.

While the keys must till be included, providing an empty string for ``"mapClouds":`` will simply make it unused, thus making it optional.

**requires & requiresEvent**
-----------------------------

.. code-block:: javascript

  "requires": ["Name of a required item", "Another item that may be required"],

Retrieve the ``"name:"`` key(s) of an :doc:`Item </Doc/Items/Creation>` to use as a requirement for players to clear the clouds and access the location on the map.
Typically a Key Item.

**Does not include exploring via the Grimoire**.

While the key must still be included, the array can be left empty if you do not wish to use it. You can leave either a blank string or none at all.

.. code-block:: javascript

  "requiresEvent": [
    {
    "NameOfEvent": "",
    "Progress": "-99",
    "ChoiceNumber": "-1",
    "Choice": ""
    }
  ],

A more complex and optional key that contains objects that will check for progress or choice in a event. It can be used in alongside or as an alternative to ``"requires":``.

Given it is an array, you can introduce multiple requirements of the same type by providing duplicate objects for as long as it contains all four of the given keys.

You need to provide a value for ``"Progress":`` and ``"ChoiceNumber":``, else it will not work. If you don't wish to use one of them, use the default values above.
``"NameOfEvent":`` and ``"Choice":`` need at least empty strings.

If in use, you cannot exclude unused keys in the object, they must all be present.
If ``"requiresEvent":`` isn't being used at all, it can be excluded from the file entirely.

**FullyUnlockedBy & FullyUnlockedByEvent**
-------------------------------------------

.. code-block:: javascript

  "FullyUnlockedBy": [""],

Functions the same as the ``"requires":`` key, unlocking exploration via the Grimoire.

.. Leaving it blank means exploration is unlocked by default?

.. code-block:: javascript

  "FullyUnlockedByEvent": [
    {
    "NameOfEvent": "",
    "Progress": "-99",
    "ChoiceNumber": "-1",
    "Choice": ""
    }
  ],

Functions the same as ``"requiresEvent":`` key, unlocking exploration via the Grimoire alongside or as an alternative to ``"FullyUnlockedBy":``.

**Deck Size Keys**
-------------------

.. code-block:: javascript

  "MinimumDeckSize": "5",

Decides the minimum number of monsters and/or events the player must select before they can start an adventure via the Grimoire.

.. code-block:: javascript

  "MaximumMonsterDeck": "5",
  "MaximumEventDeck": "2",

The maximum number of monsters and events players can add for exploration via the Grimoire, with two key variants for Monsters and Events respectively.

**Monster & MonsterGroups Keys**
---------------------------------

.. code-block:: javascript

  "Monsters": ["Blue Slime", "Elf", "Lizard Girl"],

Set the choice of monsters that can be selected for exploration via the Grimoire. **Use their ``"IDname":`` key**.

.. code-block:: javascript

  "MonsterGroups": [
    {
    "Group": ["Blue Slime", "Elf"]
    },

    {
    "Group": ["Lizard Girl"]
    }
  ],

Decides the possible formations monsters in the ``"RandomMonsters":`` can take. Each object with a ``"Group":`` key will represent a different possible formation.
You can intermix different monsters via the arrays, even if the monster isn't present in ``"RandomMonsters":``.
Repeat an object with a certain formation multiple times if you wish to make it more likely.
Works the same as an :doc:`Adventure's </Doc/Adventures/Creation>` ``"MonsterGroups":``.

While the key is required, you do not have to provide any objects if you do not wish to use formations.

**Events & Quests Keys**
-------------------------

.. code-block:: javascript

  "Events": ["Lizard Sightings"],

Set the choice of events that can be selected for exploration via the Grimoire, utilizing an event's ``"name"``: key. Ensure the ``"CardType":`` is set to ``"Event",``.

.. code-block:: javascript

  "Quests": [""],

Set the choice of monsters that can be selected for exploration via the Grimoire, utilizing an event's ``"name"``: key. Ensure the ``"CardType":`` is set to ``"Quest",``.

**Treasure & Eros Keys**
-------------------------

.. code-block:: javascript

  "Treasure": [
    {
    "Common": ["Calming Potion", "Calming Potion", "Anaph Herb", "Ugli Herb"]
    },

    {
    "Uncommon": ["Calming Potion", "Energy Potion", "Luck Rune", "Luck Rune", "Soothing Potion"]
    },

    {
    "Rare": ["Panacea", "Stoic Rune", "Stoic Rune", "Gloves of Skill", "Gloves of Skill", "Power Belt"]
    }
  ],

Sets the possible items that can be earned from chests for each type of treasure rarity.
The listed objects and their keys must be included, and each array must have at least one item.

.. code-block:: javascript

  "Eros": [
    {
    "Common": "25"
    },

    {
    "Uncommon": "75"
    },

    {
    "Rare": "150"
    }
  ],

Sets the amount of eros given from chests in exploration via the Grimoire for each type of treasure rarity.
The listed objects and their keys must be included, and each key must provide a value in their string.
