.. _Image Layers:

**Image Layers**
=================

.. _ChangeImageForFunc:

**ChangeImageFor - DEPRECATED. Will be removed in future update. see** `ChangeImageLayer`_ **instead.**
------------------------------------------------------------------------------------------------------------
Changes the image of a displayed character. The number represents which of the characters that are currently being displayed will have their image changed.
In combat, it will change the focused monster instead of a specific one. Typically for characters that don't make use of layers.

.. code-block:: javascript

  "ChangeImageFor", "1", "ImageName"

In combat with ``"FocusOnMonster"``:

.. code-block:: javascript

  "FocusOnMonster", "1", "ChangeImageFor", "ImageName"


----

**ChangeImageLayer**
---------------------

Changes a specific layer of art for the specified character in the scene, works almost the same as above.
If you set the image name to ``""`` or ``"None"``, it will stop displaying the layer. Excluding layers with ``"alwaysOn":`` enabled.
When using \|\f\|ChangeImageLayer|/| type function, to stop displaying the layer you need to use "None".

.. code-block:: javascript

  "ChangeImageLayer", "LayerType", "1", "ImageName"

Make sure the LayerType field is the same as that layer's name in the monster's json.

Instead of a number, you can instead use a Monster's nameID. It will change their layer regardless of what position they are in from
:ref:`DisplayCharactersFunc`. It's also useful for tracking whose face you're changing.

however while in an active combat, for both the monsters file and combat events, the number/selection field should be ignored like this, which is applicable to ANY image layer related function for selection:

.. code-block:: javascript

  "ChangeImageLayer", "LayerType", "ImageName"

.. _ActivateOverlayFunc:

**ActiveOverlay & DeactivateOverlay**
""""""""""""""""""""""""""""""""""""""
.. code-block:: javascript

  "ChangeImageLayer", "RightArm", "1", "ActivateOverlay"

  "ChangeImageLayer", "LeftArm", "1", "DeactivateOverlay"

``"ActivateOverlay"`` and ``"DeactivateOverlay"`` toggles the visibility of a layer.

**ImageSet & ImageSetPersist**
"""""""""""""""""""""""""""""""
.. code-block:: javascript

  "ChangeImageLayer", "ImageSet", "1", "Plush"

``"ImageSet"`` will swap a set of images to the name of the set in the final string in the above. It will automatically carry over any current expressions and related.
Note this is not held persistently and would need to be called every time the character is called.

``"ImageSetPersist"`` will swap to the stated image set and stay on it whenever that character is called again, even in combat. Used for Aiko's body type variants.

.. code-block:: javascript

  "ChangeImageLayer", "ImageSetPersist", "1", "Plush"

**ImageSetDontCarryOver**
""""""""""""""""""""""""""
Gives the ability to use Image Sets as alternate CGs without needing to be the exact same layer layout as the other sets.

.. code-block:: javascript

  "ChangeImageLayer", "ImageSetDontCarryOver", "1", "Hypno"

.. Not confidant in how I've described the functions here, will go over it again when I make the expanded pages on the pictures key.

----

**AnimateImageLayer**
---------------------
Can override a specific layer of a character to do frame by frame animation on a loop, primarily for CG usage.
Up to 3 separate layers can be animated.
Check Aiko's titfuck scene in BedMimic.json for an example of this in use.

.. code-block:: javascript

  "AnimateImageLayer", "Animation2", "LayerTarget", "CharacterTarget", "1.5",
      "Monsters/Aiko/Paizuri/AikoBoobs__AikoPaizuri_Titfuck.png",
      "Monsters/Aiko/Paizuri/AikoBoobsSqueeze__AikoPaizuri_Titfuck.png",
  "EndLoop",

Disambiguation in order of strings used in the first row:

.. list-table::
  :widths: 1 5

  * - ``"AnimateImageLayer"``
    - Declares the function.
  * - ``"Animation2"``
    - Which of the three animation channels you're using, ranging across: ``"Animation"``, ``"Animation2"``, & ``Animation3"``.
  * - ``"LayerTarget"``
    - Which layer on the character you're targeting, e.g.: ``"Expression"``
  * - ``"CharacterTarget"``
    - The character in the scene you're targeting, like `ChangeImageLayer`_, you can pick speaker number or nameID. e.g.: ``"Aiko"`` & ``"1"``
  * - ``"1.5"``
    - The amount of seconds passed before the animation moves to the next frame in the list.

After this is a list of the images you want it to swap to which must be acquired manually and can't be called from the lists in the monster file.

To end an animation, you need to call a blank use of the function:

.. code-block:: javascript

  "AnimateImageLayer", "", "LayerTarget", "CharacterTarget", "0",  "EndLoop",

Else the animation will continue to play.
