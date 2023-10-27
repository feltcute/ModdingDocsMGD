.. _breakingchange:

**Breaking Changes**
====================

This page outlines any breaking changes between breaking game releases to help with updating mods.

**V25.6**
----------

Due to forward compatibility and technical reasons, custom :doc:`Markup` from MGD (not Ren'Py) are now enclosed with ``[]`` square brackets instead of ``{}`` curly braces.

**Fix Instructions**
""""""""""""""""""""""""

There is a regex you can use in VS Code and Atom to find and replace all instances of ``{markup}`` with ``[markup]``:

.. tabs::

    .. tab:: VS Code

        1. Go to *File* -> *Add Folder To Workspace...*
        2. Go back to the ``game`` folder, click on ``Mods``, click on your mod folder, click Select Folder/Open.

        .. image:: /Doc/GettingStarted/img/vscodeprojectview.png
            :align: center

    .. tab:: Pulsar

        1. Go to *File* -> *Add Project Folder*
        2. Go back to the ``game`` folder, click on ``Json``, click on your mod folder, click Select Folder/Open.

        .. image:: /Doc/GettingStarted/img/atomprojectview.png
            :align: center

- Add your mod to your workspace/project view:

- Press ``ctrl`` / ``⌘`` + ``shift`` + ``f`` to open up workspace/project-wide search and replace.
- Add the search and replace values:

Search field:

.. code-block::

    \{(ThePlayerName|THEPLAYERNAME|TPN|DamageToPlayer|DamageToEnemy|FinalDamage|PlayerOrgasmLine|MonsterOrgasmLine|DisplayPlayerChoice|DisplayMonsterChoice|ProgressDisplay|AttackerName|AttackerName2|AttackerName3|AttackerName4|AttackerName5|TargetName|AttackerYouOrMonsterName|TargetYouOrMonsterName|FocusedMonsterName|AttackerHeOrShe|TargetHeOrShe|AttackerHisOrHer|TargetHisOrHer|AttackerHimOrHer|TargetHimOrHer|SexAdjective|SexWords|PlayerLevel|PlayerMoney|ColorEnd)\}

Replace field:

.. code-block::

    [$1]

- Ensure the regex button is turned on in your text editor:

.. tabs::

    .. tab:: VS Code
        
        .. image:: /img/vscRegex.png

    .. tab:: Pulsar

        .. image:: /img/pulsarRegex.png


- Press 'replace all' in your respective text editor. It will take a few minutes to complete.

- ``[SexWords]`` in particular is now ``[SexWord]`` due to a technical issue with old saves.
- In your text editor, do the above regex first, and then make sure the regex button is disabled therafter.
- Search your project for: ``[SexWords]``
- Replace with: ``[SexWord]``

**Other v25.6 Breakages**
""""""""""""""""""""""""""

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
