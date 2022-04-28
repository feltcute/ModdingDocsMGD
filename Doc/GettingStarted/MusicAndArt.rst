.. _Music And Art Summary:

**Music & Art**
=================

.. warning:: 

    If using assets found online, always review licenses of copyrighted materials, and give credit to your sources.

**Mod Pathing**
----------------

Whenever a key or function asks for an image asset path, they are expecting it to be in a base game directory by default.
This means *game/music/*, *game/sfx/*, or *game/images/*. 

If your asset is stored within your mod folder, this means the game won't find it, as it will be looking for it like this:

.. code-block:: javascript

  "images/Mods/<modName>/folder/file.png"

To fix this, any has to prepend their file path with ``../``. 
This will tell the game to go back up by one director, landing it in */game*. Like so:

.. code-block:: javascript

  "../Mods/<modName>/folder/file.extensiontype"

Map related assets are the exception, as they're two directories deep: *images/map/*. 
You will need to use ``../`` twice in cases where you are making a new location on the map:

.. code-block:: javascript

  "../../Mods/<modName>/folder/file.extensiontype"

**Images**
-----------

MGD supports the following image file types:

* PNG (recommended, and also specifically required for Location image backgrounds)
* WEBP (comparitively smaller at the same levels of quality as PNG)
* JPG/JPEG (not recommended due to transparency being unsupported by JPG files)

**Audio**
----------

Supported audio file types:

* Opus
* Ogg Vorbis
* MP3
* WAV (uncompressed 16-bit signed PCM only)

