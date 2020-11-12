.. _Overview:

**Making Your Mod**
====================
It is important to know how content is created in Monster Girl Dreams first, to understand how you will be modding.
Firstly, you will not be coding in python.
You will be utilizing custom functions Threshold specifically made for developing content, in a text file format called JSON.

You can find the .json files the base game uses in a folder neatly called "Json" in *game/Json/*. Please do give it a look.
You will find all of the games .json files to be plainly readable and modifiable as-is.
You can also find music, images, and sound effects called upon by the .json files in *game/music/*, *game/images/*, and *game/sfx/* respectively.

However, you will not be working in these folders directly. That can cause all sorts of issues.
As you're likely familiar with, you will be putting your creations in *game/Mods/*.

If you've ever given any existing mods a look, making a mod is as straightforward as it looks. Creating a folder with the mods name in *game/Mods*.
They can contain anything you please, but there is of course only one file type the game will be somewhat particular about: JSON.

**JSON Folders**
-----------------
The game does expect your .json files to be organized in folders of particular names, so it can easily locate them and load them into the correct databases on startup.
Where they are placed within your mods folder does not particularly matter, for as long as all relevant .json files are under them.
While maybe obvious, **do not place them inside one another**.

You also only need to provide a certain JSON folder if you intend to use it. With that out of the way, here is each type:

* **Adventures** | Adventures are the first-time runs you do before you fully unlock a location. This also includes all special menu choices you have in the locations map, such as "Shortcut To Nara" or "Visit Amy", telling the game what they require to be unlocked or what event they will point to.

* **Events** | Contains all events and combat events. Events encompass a vast number of scenes and moments within the game, you will find them pretty much everywhere you read the text box along the bottom of the screen. This includes brothel events. Combat events would be events specific to combat encounters when just a Skill is too simple. An example would be the blue slime asking if you are okay with anal insertion.

* **Fetishes** | Contains both fetishes **and addictions** for the game. You can, in fact, make new fetishes. You only need to make a single json file that provides a list of new fetishes. Lesser known are addictions, which track particular milestones with characters. They work in a very similar manner and fall under the same system, but are typically hidden from the player. Use them both with care.

* **Items** | This will contain all of the consumables, equipment, and key items in the game.

* **Locations** |  Pretty self-descriptive, it encompasses all .jsons related to the locations you find on the map when you select "Go Adventuring!" from the town. This includes what icons they should use, default BG and music, unlock requirements, what Adventures it has, and how the exploration via the Grimoire will work.

* **Monsters** | This will contain all of the monsters in the game, **including NPCs**, or generally any character. Note how they are organized per location in the base game, it's a handy tip. Also of note in the base game are outliers like the brothel specific iterations of various MGs, or certain NPCs not categorized into any particular folder.

* **Perks** | This will contain all of the perks in the game, including monster only perks.

* **Skills** | This will contain all of the skills in the game, including the monster skills.

Remember you do not have to follow how the base game organizes the contents within each of these folders, that can be done however you want!
You can check the *game/Json/* folder to see how Threshold chose to organize them for the base game, and for general reference in the future when you want to see how
Threshold makes the games content. It can greatly help when it comes to understanding the process. Checking other peoples mods can also help with this.

Lastly, if you have incomplete .json files or an entire folder of .json files that aren't yet ready and you don't want it to be loaded by the game on startup,
simply put a _underscore at the beginning of its name to prevent the game from including it. You can see the base game utilizing this for template and example JSON files.

.. _Music And Art Summary:

**Music and Art Summary**
--------------------------
You're free to add whatever you please, just do try to be sensible and avoid using copyrighted materials. Give credit to your sources.

All one has to do when adding their own game assets like music or art, is add them to your mod's folder. The game does not check any particular folders for them,
they can be named and organized however you please.

Note that when referring to the filepath of your assets via functions in your .json files,
you will naturally be fighting the base game filepaths that are hard-coded in the functions.
As such, you will typically be using a file path similar to the code block below.

::

  "../Mods/<modName>/folder/file.extensiontype"

To explain, *../* tells the game that you wish to go back a directory. So if you were in *Directory/FolderA/FolderB/*, using *../* will take you to *Directory/FolderA/*.
Any image, music, or sound will require you to go back up by one folder, as in the code block above.
Map related assets are two directories deep (*images/map/*), so you will need to use *../* twice in cases where you are making a new location on the map.

**Console**
------------
The in-game console can be very useful for debugging and testing your mod at a rapid pace, without having to manually build up a save towards what you want.
`See the game wiki for Console information. <https://monstergirldreams.fandom.com/wiki/Console>`_

**Releasing Your Mod**
-----------------------
When you feel your work is ready to be shared with the world, you'll have a couple of choices on how you can go about uploading it and making it easily accessible for all to find.
No worries, as there are more than plenty of free file hosts out there!

... The trick is finding ones that allow mods for NSFW games.

**Uploading**
""""""""""""""
* `Mega <https://mega.nz/start>`_ is a popular one for its flexible TOU, file cap size, and download speed. However, you may run into long term hosting issues. It also requires an account. This was a common choice for MGD modders.
* `Anonfile <https://anonfile.com/>`_ has a very flexible TOU, good download speed, a large file cap of 20GB, and what is assumed to be lifetime hosting. While it has yet to be used to host an MGD mod, there are plenty of other NSFW projects that have used this platform as their host, including Monster Girl Dreams.
* For the technically inclined, `Github <https://github.com/>`_ has proven to be a very advanced and appealing hosting platform, as it doubles as a place for people to download your mod, and to help you manage your work. Especially useful for those who intend to collaborate on mod projects. Given its more advance use-case, it isn't a good choice for those wishing for as simple of a modding experience as possible.
* Lastly, the `MGD Discord <https://discord.com/invite/monstergirldreams>`_. Simply upload your mod alongside your post in #mod-posting, and share the download link anywhere else, without requiring the downloader to fire up Discord. The server can currently handle mods up to 50MB in size.

**Where To Share**
"""""""""""""""""""
There are two key places you are encouraged to share the link to your mod. Otherwise, you're free to share it anywhere you like, at least, as far as you can with something like this.

* The Mod List page on the `wiki <https://monstergirldreams.fandom.com/wiki/Category:List_Of_Mods>`_. There is a tab in the How-To Guides section for how you should format and include your mod in the list, for the sake of keeping a clean presentation. Don't sweat it too hard. The popularity of downloads here is only second to...
* In #mod-posting on the `MGD Discord <https://discord.com/invite/monstergirldreams>`_. This makes up for a majority of mod downloads during your first week or two of launch, then most traffic will be coming from the wiki. If you want instantaneous exposure and feedback for your creation, this place will get you it.
