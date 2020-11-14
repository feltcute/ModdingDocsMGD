.. _Time:

**Time**
=========

.. _PlayerStep:

**PlayerStep**
---------------
``"PlayerStep"`` operates like the passage of time for turns in combat.

This triggers persistent status effects, covering ``"Trance"``, ``"Hypnotized"``, ``"Paralysis"``,  and ``"Aphrodisiac"``, letting their duration and/or potency tick down.

**AdvanceTime**
----------------
Moves forward time. Note there are 6 chunks in a single day.

::

  "AdvanceTime", "1"

``"DelayNotifications"`` can be put after, to delay perk decay notifications until the next time jump, so you don't interrupt a scene.

**IfDelayingNotifications**
----------------------------
Lets you check if ``DelayNotifications`` was called letting you jump to a different scene if true. **Only works in events.**
This is so ``"TimePassed"`` events can comply with the above functions, but still let them have the opportunity to silently operate.

::

  "IfDelayingNotications", "SilentScenes"

**TimeBecomesNight & TimeBecomesDay**
--------------------------------------
``"TimeBecomesNight"`` sets the time to false night, while ``"TimeBecomesDay"`` sets it to false day respectively.
The former will clear false days and start false nights, the latter, vice versa.

False nights last until you return to town or the next day starts. False days during the night ends in the next time advancement or when returning to town.

**IfTimeIs**
-------------
Can check for the following: Day, Night, DayFaked, DayTrue, NightFaked, NightTrue, Morning, Noon, Afternoon, Dusk, Evening, Midnight.

**Only works in events.**

::

  "IfTimeIs", "Night", "SceneNameHere"

**HealingSickness**
--------------------
``"HealingSickness"`` starts a global trigger for tracking if the player healed with a refresh point. Lasts a whole day, or 6 chunks.

**IfHealingSickness**
----------------------
Jumps to the given scene if healing sickness is active. Used to actually avoid the refresh scenes for rest points. **Only works in events.**

::

  "IfHealingSickness", "SceneNameHere"

**RestPlayer**
---------------
``"RestPlayer"`` heals the player as if using a rest point and advances time by 1 chunk.

.. _SleepPlayer:

**SleepPlayer**
----------------
``"SleepPlayer"`` advances time until morning and fully heals the player.
