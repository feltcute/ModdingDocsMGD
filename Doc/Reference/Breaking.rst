.. _breakingchange:

**Breaking Changes**
====================

This page outlines any breaking changes between breaking game releases to help with updating mods.

**V25.6**
"""""""""

- Due to forward compatibility and technical reasons, custom :doc:`Markup` from MGD (not Ren'Py) are now enclosed with ``[]`` square brackets instead of ``{}`` curly braces.

There is a regex you can use in VS Code and Atom to find and replace all instances of ``{markup}`` with ``[markup]``:

.. code-block::

    \{(ThePlayerName|THEPLAYERNAME|TPN|DamageToPlayer|DamageToEnemy|FinalDamage|PlayerOrgasmLine|MonsterOrgasmLine|DisplayPlayerChoice|DisplayMonsterChoice|ProgressDisplay|AttackerName|AttackerName2|AttackerName3|AttackerName4|AttackerName5|TargetName|AttackerYouOrMonsterName|TargetYouOrMonsterName|FocusedMonsterName|AttackerHeOrShe|TargetHeOrShe|AttackerHisOrHer|TargetHisOrHer|AttackerHimOrHer|TargetHimOrHer|SexAdjective|SexWords|PlayerLevel|PlayerMoney|ColorEnd)\}`

- Add your mod to your workspace/project view:

.. tabs::

    .. tab:: VS Code

            1. Go to *File* -> *Add Folder To Workspace...*
            2. Go back to the ``game`` folder, click on ``Json``, click Select Folder/Open.
            3. In your workspace view, navigate within the Json folder to ``Events/_BlankEvent.json``, and open the file.
            4. Select all file contents, ``ctrl`` / ``⌘`` + ``c`` to copy.
            5. Go to your ``ShoppingEvent.json`` tab, ``ctrl`` / ``⌘`` + ``v`` to paste.
    
        .. image:: /Doc/GettingStarted/img/vscodeprojectview.png
            :align: center

    .. tab:: Pulsar

            1. Go to *File* -> *Add Project Folder*
            2. Go back to the ``game`` folder, click on ``Json``, click Select Folder/Open.
            3. In your project view, navigate within the Json folder to ``Events/_BlankEvent.json``, and open the file.
            4. Select all file contents, ``ctrl`` / ``⌘`` + ``c`` to copy.
            5. Go to your ``ShoppingEvent.json`` tab, ``ctrl`` / ``⌘`` + ``v`` to paste.

        .. image:: /Doc/GettingStarted/img/atomprojectview.png
            :align: center

- Press ``ctrl`` / ``⌘`` + ``shift`` + ``h`` to open up workspace/project-wide search and replace.
- Ensure the regex button is turned on in your text editor:

.. tabs::

    .. tab:: VS Code
        
        .. image:: /img/vscRegex.png

    .. tab:: Pulsar

        .. image:: /img/pulsarRegex.png

- Removed ``{UseSetColor}`` and ``{SetTextColor}``.

 - ``{UseSetColor}`` is replaced by ``[StoredColor]``, working largely the same. 
 - ``{SetTextColor}`` is replaced by :ref:`SetStoredColor`. You can make use of :ref:`callscenethenreturn` or :ref:`callscenethenreturn` to cleanly set all the colors at any point.
 - See :ref:`coloredtextmarkup` for more information on the new syntax.

- ``{Pink}`` is the one exception to the square bracket change by technicality, but now must be closed with ``{/Pink}``.

**Upcoming Deprecations**
-------------------------

**Planned**
------------

- :ref:`ChangeImageForFunc`, replaced by :ref:`ChangeImageLayer`. Threshold has not stated a planned version for removal.
