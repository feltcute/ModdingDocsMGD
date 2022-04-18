.. _JSON Folders Overview:

**JSON Folders Overview**
==========================

A brief overview of each base JSON folder you'd find in a mod or the base games folder in */game/Json*.

* **Adventures** | Adventures are the menu choices you make on the game map, including the first-time runs you do before you fully unlock a location's menu choices. Examples would be "Shortcut To Nara" or "Visit Amy". These menu choices will proceed to point to an Event if the player meets any requirements.

* **Events** | Events encompass the vast number of scenes and moments within the game. They are near all instances of the text you read in the textbox at the bottom of the game screen, including things the player doesn't see, such as scene jump logic, altering music or images, or calling stat checks. Events are even used during combat encounters when just a Skill JSON is too simple. An example would be the blue slime asking if you are okay with anal insertion.

* **Fetishes** | Contains both fetishes **and addictions** for the game. That's right, mods can go as far as introducing new fetishes. Lesser known are addictions, which track particular milestones with characters. They work in a very similar manner and fall under the same system, but are typically hidden from the player. Use them both with care.

* **Items** | Contains consumables, equipment, and key items, defining their values and effects.

* **Locations** |  Locations are spots on the game map when you select "Go Adventuring!" from the town, defining their icon, adventure, and Grimoire details. Note the town itself is hard-coded, and thus isn't modded like you would other existing locations. Instead, mods can access the town by creating Event JSONs.

* **Monsters** | Not only do monsters go here, but **also NPCs** in the town, or generally any character, defining their visual and/or visual description, and combat values.

* **Perks** | Encompasses perks acquired by the player in the game, and perks only usable by enemies, defining their values and effects.

* **Skills** | Covers skills used by the player and enemies in the game, defining their values, effects, and the skill's combat line. Skills sometimes point to Events for more complex behaviors.

The content for the base game made by Thresold in *game/Json* can be freely accessed and read by modders.
This can be useful as a frame of reference for understanding certain practices and how to make certain types of content like the base game.

No different from mods in the */Mods* folder, content for the game is under the same folder names the game needs to find certain type of JSON files. 
Inside each of these folders, you can see how Threshold chooses to organize his files. 
While a good reference, you are not required to follow how Threshold chose to organize them, they can be organized any way you want once inside.

If you have an incomplete .json file, or an entire folder of JSON files that aren't yet ready to be loaded by the game,
put a _underscore at the beginning of its name to prevent the game from including it.
You can see the base game utilizing this for blank templates and example JSON files.