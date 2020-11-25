.. _Event Creation:

**Event Creation**
===================
Breaks down the keys and strings used by Events.

Go to *Json/Events/*, and then see the .json files present for examples, and **_BlankEvent.json** for a template.

.. If you have installed snippets, you can type .*blank* to instantly create an event snippet.

Assume all keys are required, unless stated otherwise.

**name**
---------
.. code-block:: javascript

  "name": "Name of Event",

The name of the event, presented in the Grimoire and for internal referral.

.. _CardType:

**CardType**
-------------
.. code-block:: javascript

  "CardType": "Event",

Changes how the game calls and utilizes the event. The possible choices for the value depending on what you wish to accomplish are as follows...

.. _Grimoire:

**Grimoire**
"""""""""""""

* ``"Event"`` in order for the event to be properly drawn from the Grimoire in the ``Events:`` section.

* ``"Quest"`` in order for the event to be properly drawn from the Grimoire in the ``Quests:`` section.

**Town**
"""""""""

* ``"Shopping"``, ``"Church"``, ``"Guild"``, and ``"Inn"`` will make the event appear as an option for the respective location in the town. Putting ``"EnterArea"`` in the ``"Description":`` key will make it trigger when the player enters that location. See *Events/Town* for examples.

**Brothel**
""""""""""""

* ``"BarShift"``, ``"WaiterShift"``, and ``"GloryHoleShift"`` will be called for the shift choice the player or Belle makes. Putting another shift type in the ``"Description":`` key will make it count for that shift too. Repeating the same shift type increases its chances.

* ``"DayShift"`` can be used for shifts during the day. Can also be combined with the previous three shift types via ``"Description":``, or repeated for higher chances.

**Action/Event Triggered**
"""""""""""""""""""""""""""

* ``""`` is recommended for combat and loss/victory events, as they are meant to only be called by :ref:`Event Jumps` and thus are best left blank.

* ``"EndOfDay"`` will trigger upon the start of a new day. Useful for tracking addictions. See *Events/TimePassing/EndOfDay.json* as an example.

* ``"TimePassed"`` will trigger when any amount of time has passed. Useful for tracking player status effects. See *Events/TimePassing/TimePassed.json* as an example.

* ``"StepTaken"`` will trigger when players transition between events or encounters during adventures. Also useful for triggering player status effects. See *Events/TimePassing/StepTaken.json* as an example.

* ``"EndOfTurn"`` will trigger specifically at the end of turn, primarily for player functions as they trigger every turn regardless of who's fighting. See *Events/CombatEvents/PlayerEndOfTurn.json* as an example.

* ``"EndOfCombat"`` will trigger at the end of combat. For specific player skills such as Pin, see *Events/CombatEvents/Player/PlayerEndOfCombat.json* as an example.

* ``"StartOfTurn"`` will trigger specifically at the start of turn, primarily for player functions as they trigger every turn regardless of who's fighting. See *Events/CombatEvents/PlayerStartOfTurn.json* as a blank example.

* ``"StartOfCombat"`` will trigger at the start of every combat, generally for player combat event use. See *Events/CombatEvents/Player/PlayerStartOfCombat.json* as a blank example, or the EndOfCombat example for similar usage.

* ``"PlayerOrgasm"`` will trigger every time the player orgasms, including out of combat. See *Events/CombatEvents/OrgasmEvents.json* as an example.

* ``"Dream"`` will be called when the player sleeps, via the :ref:`SleepPlayer` function. Note that no dreams will be called if ``"SleepPlayer"`` is followed with ``"DelayNotifications"``.

**Description**
----------------
.. code-block:: javascript

  "Description": "A description of the event",

When used for :ref:`Grimoire` card types, it will present the string you provide on the right hand side of in the Grimoire when players are reviewing events and quests for selection.

When used for town card types, providing it with the string ``"EnterArea"`` will make it trigger when the player enters that location.

When used for brothel shift card types, using a different shift type will make it count for that shift too. Repeating the same shift type increase its chances.

**requires & requiresEvent**
-----------------------------
.. code-block:: javascript

  "requires": ["Vandal Note"],

Retrieve the ``"name:"`` key(s) of an :doc:`Item </Doc/Items/Creation>` to use as a requirement for players to access the event, primarily for the Grimoire. Typically a Key Item.
The key must be included, but the array can be left empty. You can leave either a blank string or none at all.

.. code-block:: javascript

  "requiresEvent": [
    {
    "NameOfEvent": "",
    "Progress": "-99",
    "ChoiceNumber": "-1",
    "Choice": ""
    }
  ],

A more complex and optional field that checks for progress or a choice in a event. It can be used in addition to or in place of ``"requires":``.
You need to provide a value for ``"Progress":`` and ``"ChoiceNumber":``, else the game will crash. If you don't wish to use one of them, use the default values above.

If in use, you cannot exclude unused keys in the object, they must all be present.
If ``"requiresEvent":`` isn't being used at all, it can be excluded from the file entirely.

.. _Speakers:

**Speakers**
-------------
.. code-block:: javascript

  "Speakers": [
    {
    "name": "IDname of Monster",
    "postName": "",
    "SpeakerType": ""
    },
    {
    "name": "IDname of another Monster",
    "postName": " A postName.",
    "SpeakerType": ""
    }
  ],

``"Speakers":`` gives functionality for the ``"Speaks"`` function, used in dialogue. Each speaker will need to be put in a separate object.
Each object added is correlated to a number in the ``"Speaks"`` function, starting from 2 for the second object to a maximum of 12 added speakers,
ordered by each object added from top to bottom.
See :ref:`Dialogue` for more information on the ``"Speaks"`` function.

``"name":`` must be from the ``"IDname":`` key of a :doc:`Monster </Doc/Monsters/Creation>`. Don't worry, it will proceed to display the string in the monster's ``"name":``,
not the IDname.

``"postName":`` will place the data provided in the string after their name, for example, if you wanted to differentiate multiple generic monsters (Elf 1, Elf 2, etc).
Can use the ``"SetPostName"`` function to override it for all characters. See the function page :ref:`Speakers Specific` for more information.

``"SpeakerType":`` currently only serves one purpose. If set to ``"?"`` will let you put in any name you wish for the ``"name":`` key, regardless if they even have a monster json.
Alternatively, the ``"Speak"`` function can be used instead. Otherwise, it can be left with an empty string.

While ``"Speakers":`` and at least one object with the listed keys must be included, it doesn't necessarily need to be used.
All keys in the objects require at least an empty string.

**EventText**
--------------
.. code-block:: javascript

  "EventText": [
    {
    "NameOfScene": "EventStart",
    "theScene": [
      "While walking an intricate pink rune suddenly appears beneath you!",
      "Menu",
      "Do something!",
      "See what happens.",
      "EndLoop"
      ]
    },
    {
    "NameOfScene": "Do something!",
    "theScene": [
      "You trip on the pink rune and suffer a bad headache."
      ]
    },
    {
    "NameOfScene": "See what happens.",
    "theScene": [
      "It's a pink rune. It continues to exist defiantly."
      ]
    }
  ]

``"EventText":`` is an array of objects containing the series of scenes that will make up your event. Each object will contain the exact same keys.

``"NameOfScene":``, which takes a string you provide it to uniquely identify the scene. They can contain whatever you please.

``"theScene":`` which takes an array of strings that make up the scene. These objects are plainly called scenes.
Your strings will be displayed to the user as narrative text, unless it is identified as a function.

The first scene added will always display first for your average event jump from any of the ``"CardType":`` values.
However, specific scenes in a event can be jumped to, either by a game feature or by a function.

See :ref:`Functions` for the vast range of functions that can be used in scenes.
