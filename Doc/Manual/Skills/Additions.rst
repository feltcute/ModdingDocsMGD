.. _Skill Additions:

**Skill Additions**
====================

Making a Skill addition is non-destructive and thus will be compatible with any other mods making additions to the same Skill.

Check **_SkillAdditionExample.json** for an example.

The overview will proceed to go over each :term:`key` you would find in a regular Adventure .json, how their role changes, and if they're required in a addition.

.. note::
  
  All other :term:`keys` outside of the ones listed aren't used, and thus should not be included for tidiness,
  **excluding these five**:

  .. code-block:: javascript

    "removesStance": "Provide/replace :term:`string` found in base skill",
    "restraintStruggle": "Provide/replace :term:`string` found in base skill",
    "restraintStruggleCharmed": "Provide/replace :term:`string` found in base skill",
    "restraintEscaped": "Provide/replace :term:`string` found in base skill",
    "restraintEscapedFail": "Provide/replace :term:`string` found in base skill"

**name**
---------

.. code-block:: javascript

  "name": "Holy Headpat",

Required so you can tell the game which Skill you wish to make an addition to.

**skillType**
--------------

.. code-block:: javascript

  "Addition": "Yes",

Required so you can tell the game that you're wishing to make an addition. Can be added into almost any part of the file.

**fetishTags**
---------------

.. code-block:: javascript

  "fetishTags": ["Pats"],

Optional, adds to the existing array. The :term:`strings` provided in the original ``"fetishTags":`` :term:`key` will still be present, and not overridden.

**startsStance**
-----------------

.. code-block:: javascript

  "startsStance": ["Cuddling"],

Optional, adds to the existing array. The :term:`strings` provided in the original ``"startsStance":`` :term:`key` will still be present, and not overridden.

Does not require the original file to have the :term:`key` marked as an array.

**unusableIfStance**
---------------------

.. code-block:: javascript

  "unusableIfStance": ["Spoon-feeding"],

Optional, adds to the existing array. The :term:`strings` provided in the original ``"unusableIfStance":`` :term:`key` will still be present, and not overridden.

**requiresTargetStance**
-------------------------

.. code-block:: javascript

  "requiresTargetStance": ["Handholding"],

Optional, adds to the existing array. The :term:`strings` provided in the original ``"requiresTargetStance":`` :term:`key` will still be present, and not overridden.

**unusableIfTarget**
---------------------

.. code-block:: javascript

  "unusableIfTarget": ["Oral"],

Optional, adds to the existing array. The :term:`strings` provided in the original ``"unusableIfTarget":`` :term:`key` will still be present, and not overridden.

**removeStance**
-----------------

.. code-block:: javascript

  "removesStance": ["Sex"]

Optional, adds to the existing array. The :term:`strings` provided in the original ``"removeStance":`` :term:`key` will still be present, and not overridden.

Does not require the original file to have the :term:`key` marked as an array.
