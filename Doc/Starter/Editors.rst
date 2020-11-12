.. _Editors:

**Text Editors**
==========================
Have no doubts, you do need an editor beyond the one that came with your system.
They will properly read and understand .json files, will come with a boat load of useful features, and generally ensure you have a much better time while modding.
Don't stress your editor choice too much, as you can easily change it at any time (though there may be issues with indents).

Do know that these all have portable versions if you want your editor and modding work on say, a USB, separate from your main system.

There are other well-made text editors beyond the three listed here, but these are among the best free editors out there. Two of the editors here have a proven track record with Threshold.

`Atom <https://atom.io>`_
----------------------------
`Portable version <https://github.com/atom/atom/releases>`_ (download the zip/archive for your platform from the latest release)

* Supports all desktop platforms.
* Well featured.
* Built-in package support, useful for linter support. (Search for "linter", "linter-ui-default", and "linter-jsonlint" packages. Say yes to any dependencies.)
* Built-in folder navigation and management.
* Highly flexible customization.
* The fastest and most reliable syntax highlighting, but slow boot times on setups with a heavy number of packages.
* Git and github integration. (If you don't know what these are, don't sweat it and move on)
* Currently used by Threshold.

`Visual Studio Code <https://code.visualstudio.com/>`_
--------------------------------------------------------
`Portable version <https://code.visualstudio.com/docs/editor/portable>`_

* Supports all desktop platforms.
* Most featured editor out of the box.
* Built-in folder navigation and management.
* Fast built-in package support with the largest collection. JSON linter pre-installed.
* Simplest to use customization.
* Middle-of-the-road boot times and performance.
* Git and github integration.


`Notepad++ <https://notepad-plus-plus.org/resources/>`_
--------------------------------------------------------
For the portable version, go to the Downloads page, select the latest version, and grab the zip file.

* Windows only.
* Was used by Threshold during the initial creation of the game.
* Feature-lite.
* Has built-in folder navigation under View -> Folder As Workspace. Cannot manage folders and files, only serving as a shortcut.
* Lightweight on your system compared to the other editors, thanks to a lack of `electron <https://www.electronjs.org/>`_.
* ... As a result, it is the fastest to boot up.
* Supports packages and customization, though not quite as convenient.

**NOTE**: When using Notepad++, please use spaces for tabs, and just in case, utf-8 encoding! This helps prevent weirdness between editors.

* Settings -> Preferences -> Language -> 'Replace by space' on the right.
* Settings -> Preferences -> New document -> Encoding -> choose UTF-8 *without BOM*.

.. _Linter:

**Linter**
-----------
It is **HIGHLY** encouraged to use a JSON Linter in your editor of choice.
It will help you avoid critical errors that cause the game to crash from improper JSON formatting.
If you really don't wish to use a Linter, then you can use this `handy website <https://jsonformatter.curiousconcept.com/>`_ to debug JSON formatting issues.

**Snippets**
-------------
Snippets will be introduced and linked here sometime after documentation release.

They will allow for json templates, key structures, and grouped MGD functions to be deployed rapidly with little room for error.
