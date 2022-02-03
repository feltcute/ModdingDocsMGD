.. _Editors:

**Text Editors**
==========================

The following text editors are ensured to properly read and understand .json files, various useful features,
and generally ensure you have a more streamliend experience while modding.
There are other well-made text editors beyond the three listed here, but these are among the best free editors out there.

Don't stress your choice too much, as you can easily change it at any time.

These all have portable versions if you want your editor and modding work on say, a USB, separate from your main system.

Lastly, you can check the `game wiki <https://monstergirldreams.miraheze.org/wiki/Category:Modder_Guides>`_
for text editor setup and guides made by other modders.

`Atom <https://atom.io>`_
----------------------------

`Portable version <https://github.com/atom/atom/releases>`_ (download the zip/archive for your platform from the latest release)

* Supports all desktop platforms.
* Moderately featured.
* Built-in folder navigation and management, via Project view.
* Package support, including JSON linters. (Search for "linter", "linter-ui-default", and "linter-jsonlint" packages. Say yes to any dependencies.)
* Simple customization.
* The fastest and most reliable syntax highlighting, slow bootup times on setups with a heavy number of packages.
* Git and github integration.
* Currently used by Threshold.

`Visual Studio Code <https://code.visualstudio.com/>`_
--------------------------------------------------------

`Portable version <https://code.visualstudio.com/docs/editor/portable>`_

* Supports all desktop platforms.
* Most featured editor out of the box.
* Built-in folder navigation and management via Explorer view.
* Extension support, with the largest collection. JSON linter pre-installed.
* Robust customization, good out of the box settings.
* Middle-of-the-road bootup time and usage of system resources.
* Git and github integration.
.. * **MGD Extension is available for easing development. See bottom of page.**


`Notepad++ <https://notepad-plus-plus.org/resources/>`_
--------------------------------------------------------

For the portable version, go to the Downloads page, select the latest version, and grab the zip file.

* Windows only.
* Feature-lite.
* Has built-in folder navigation under View -> Folder As Workspace. Cannot manage folders and files.
* Supports packages and customization, though not quite as convenient or flexible, with weak defaults.
* Lightweight on your systems resources compared to the other text editors, given it isn't based on `web browser technology <https://www.electronjs.org/>`_.
* ... As a result, it is the fastest to bootup.
* Was used by Threshold during the initial creation of the game, dropped in favor of Atom.

**NOTE**: When using Notepad++, please use spaces for tabs, and utf-8 encoding! This helps prevent indentation and whitespace errors between text editors.

* Settings -> Preferences -> Language -> 'Replace by space' on the right.
* Settings -> Preferences -> New document -> Encoding -> choose UTF-8 *without BOM*.

.. _Linter:

**Linter**
-----------

It is **HIGHLY** encouraged to use a JSON linter in your editor of choice.
It will help you avoid critical errors that cause the game to crash from improper JSON formatting in real-time.
If you really don't wish to use one within the text editor, then you can use this `handy website <https://jsonformatter.curiousconcept.com/>`_ to check for JSON formatting issues.

.. .. _EditorExtension:

.. **VS Code Extension**
.. -------------------------------------

.. For Visual Studio Code, there is an extension made specifically for working on Monster Girl Dreams json files, titled ``MGD Language``.
.. It can be installed like any other extension via VS Codes extension search, which can be prompted with ``ctrl+shift+x``, or  ``⌘+shift+x`` on Mac.

.. Features include:

.. * Autocomplete via **snippets** allow for json templates, key structures, grouped MGD functions to be deployed rapidly with little room for error, and eased navigation with the press of the Tab key.
.. * Colored text via **syntax highlighting** specifically for various value structures that base JSON syntax highlighting can't catch. Colored text visually assist in ensuring you've properly structured various functions, markup, and related data.
.. * Error checking via **linting** specifically made for catching various errors specific to Monster Girl Dreams that base JSON linting can't catch.
.. * On hovering key structures, pop-up **hints** that link related documentation and disclaim if a particular key is unused in an addition.
