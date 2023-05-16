**Meta Creation**
==================

Breaks down the :doc:`keys and strings </Doc/Tutorials/TheJsonFormat>` used by the Meta file, 
and gives extensive tips on what values to provide.

.. image:: /img/meta.png
   :align: center

| 
| Go to *Mods/_ExampleMod/*, and then see the *meta.json* file for an example, and **_BlankMeta.json**

The meta.json is technically optional but provides useful information in the in-game Mod screen for people installing your mod.

**File Location & Icon**
-------------------------
In the base folder of your mod, create a file called *meta.json*. 
This is also the location of your mod icon to be displayed in-game. 

Adding an icon is optional, as the game will use a placeholder if one is not included. 

Your icon must be titled `icon.png`, and use the png image format. 
The game will forcefully scale it to 150x150px, and thus should be designed squared. Targeting a higher resolution is recommended, as you can use the icon elsewhere, such as on your mod page for the `wiki <https://monstergirldreams.miraheze.org/wiki/Category:List_Of_Mods#Making_&_Adding_Mods-0>`_.

If you have a portrait of a character in your game, 
you can use an image editor with layers support to fit them within this character bubble template: 

:download:`characterbubble.zip </img/characterbubble.zip>`

An example of what this looks like can be seen in the picture above of the Example Mod.

**name**
---------

The name of the mod that is presented to the user on the Mod screen.

**description**
----------------

The description goes into a scrollable text box and is presented by default to the user.

The opening should be a single-sentence summary, ideally the same as the one on your mod wiki page.

The rest should focus on generally useful information about your mod, 
such as how the user can begin its content in-game. 

You can use :ref:`TextStylingMarkup`.

**testedFor**
--------------

The last version of the game the mod has been tested against. 

**Unlike most keys for modding, this only takes a float or integer.** 
This means you do not enclose it in "quotation marks", 
and you only use numbers and optionally decimal values.

.. code-block:: javascript
    
    "testedFor": 25.2,

This should be a numerical value provided by the last game version tested for.
If the last game version was a patch version with a letter (e.g. 25.2**b**), 
always exclude the letter and just use the numerical value as-is.

.. tip::

    When updating your mod to newer game versions, 
    use the `changelog <https://monstergirldreams.blogspot.com/2020/11/v235b-change-log.html>`_ 
    and check the *Modding* section of every update since your mod was last tested. 
    
    You can use your text editors project-wide search and replace functionality (``ctrl`` / ``⌘`` + ``shift`` + ``f``) 
    to find outdated keywords listed as renamed or deprecated by the changelog.

.. To-do: A dedicated guide on updating outdated mods.

**version**
--------------

The version of your mod is meant to be increased between your mod updates.

**Unlike most keys for modding, this only takes a float or integer.** 
This means you do not enclose it in "quotation marks", 
and you only use numbers and optionally decimal values.

.. code-block:: javascript
    
    "version": 1.5.6,

How you decide to increase your version number is a personal choice, 
for as long as it only uses numerical values.
A good loose reference is `semantic versioning <https://semver.org/>`_, 
following the *Major.Minor.Patch* model.

- A Major (**1** .5.6) value is for a significant milestone of progress worthy of a major version bump.
 - A work in progress that isn't considered complete can use a value of *0*. 
 - An update in a complete state that matches your initial vision, can give a value of *1*.
 - Further markers of significant milestones beyond your initial goal can be incremented.
 - If an update revamps it so far that it makes no use of the original progress trackers, though it should come with a notice outside of your version number.
- A Minor (1. **5** .6) value is for notable milestones that alter or add to the mod's content.
- A Patch (1.5. **6**) is for fixes relating to bugs and typos that neither add nor alter content to your mod.
 - It is also good for marking updates solely done for compatibility with newer game versions.

**tags**
---------

Few word descriptors that best describe the content of your mod, 
displayed in a horizontal row via an array of given values.

.. code-block:: javascript

    "tags" : [
        "+Perpetia Fetish",
        "+1 Location",
        "+3 Events",
        "+4 Characters",
        "Steppy Kink"
    ],

You should keep each one under three words. Up to five tags would be a good amount, focusing on its most defining features.

A ``+`` symbol alongside a numerical can be used to denote how much of a certain type of content it adds.
The different types of jsons you see in this modding documentation are good examples, but can also be more loose concepts.
Such as:

* ``"+2 Boss Fights",``
* ``"+4 Romance Arcs",``
* ``"+2 Endings"``

Alternatively, you can also go for listing defining kinks of your mod. 
Specifying it as a kink is optional, especially if short on space.

* ``"Hypnosis Kink",``
* ``"Large Breasts",``
* ``"BDSM Kink",``
* ``"Handholding"``

If the mod focuses on being an expansion for base game content, an ``"Expansion"`` tag is recommended.

**credits**
------------

Provide credit to others that help made your mod possible in a scrollable text box.

| Given it is a single string, you can use :ref:`TextStylingMarkup` to give 
| line 
| breaks
| through the use of ``\n``.

.. code-block:: javascript

    "credits": "{b}Art{/b}\nPerpetua portrait by {a=https://www.jfcsxf.com/comm_info.html/}Jiffic{/a}",

Listing credit to any online assets you used is recommended, you can hyperlink your source using 
``{a=https://link}Text here{/a}``.

Especially should be used to promote any artists and musicians you commissioned.

See the Example Mod for further reference on how you should format your credit.

**authors**
------------

List your desired handle here. You can use :ref:`TextStylingMarkup` to hyperlink a location you can be reached at.

.. code-block:: javascript

    "authors": [
        "{a=https://twitter.com/ThresholdMGD}Threshold{/b}",
        "Noeru#0001"
    ],

Anyone who has directly worked on making your mod, such as direct involvement in the creative process or technical implementation, should be listed here.

Whether you also promote people you've commissioned here on top of your credit section is up to personal preference. 
They should at least be in the credit section.

**urlLabel & url**
-------------------

.. code-block:: javascript

   "urlLabel": "Wiki Page",

Represents the title of the hyperlink presented to the user.
It should only use up to three words under 10 characters.

Before opening the hyperlink, the user shall be asked to confirm the full URL of the link.

.. code-block:: javascript

   "url": "https://monstergirldreams.miraheze.org/wiki/Mod:Beach_Party"

The hyperlink to where you believe to be the central source of information on your mod.
It is recommended that this page feature the link to the latest download of your mod, 
independent of the mod version, and your mod changelog.