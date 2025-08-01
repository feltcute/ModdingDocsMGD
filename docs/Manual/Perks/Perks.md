# Perk Creation
Breaks down the keys and strings used by Perks. See [The JSON Format](../../Tutorials/TheJsonFormat.md) for more information.

Go to *Json/Perks/*, and then see the *.json* files present for
examples, and **\_BlankPerk.json** for a template.

**Assume all keys are required, unless stated otherwise.**

## name
``` json
"name": "Blank Perk",
```

Sets the name of the perk to be presented to the player in-game, and for
internal referral.

## description
``` json
"description": "",
```

The description of the perk that is displayed both in the level up menu
and the players list of perks in the character menu. `|perkDuration|`
can be inserted at the end of the description to display the time
remaining.

## LevelReq
``` json
"LevelReq": "0",
```

Level needed to be able to acquire the perk. Leave a
*value* of 0 if not desired.

## PerkReq
``` json
"PerkReq": [""],
```

Perks required to be able to acquire the perk. Useful for tiered perks
intended for the level up menu. Leave an empty
*string* if not desired.

## StatReq & StatReqAmount
``` json
"StatReq": ["Allure", "Power"],
```

Stats required to be able to acquire the perk. See
Stats Leave an empty
*string* in the *array* if not desired.

``` json
"StatReqAmount": ["6", "9"],
```

The amount the player needs for each stat in `"StatReq":`. It's set to
match each *string* from `"StatReq":`.

As an example, the first *string* of
`"6"` would go to `"Allure"`, and the following
*string* `"9"` would go to the following
*string* `"Power"`, and so forth.

## PerkType
``` json
"PerkType": ["PenetrationBoost"],
```

The perk types, deciding what the perk does to the perk owner. See
[Perk Types](../../Manual/Perks/Types.md) for
the list of perk types and their respective effects.

## EffectPower
``` json
"EffectPower": ["-34"],
```

The strength/variable for the corresponding perk types from
`"PerkType":` based on their positions in their respective
*arrays* to the other.

Varies by effect. See
[Perk Types](../../Manual/Perks/Types.md) for
the list of perk types and their respective effects.

## PlayerCanPurchase
``` json
"PlayerCanPurchase": "No"
```

Decides whether or not the player can purchase it with perk points from
the level up menu.

-   `"Yes"` will let the player view and purchase it with perk points
    from the level up menu.
-   `"No"` will prevent the player from purchasing it via the level up
    menu.
-   `"HiddenCompletelyFromPlayer"` will both prevent the player from
    purchasing it via the level up menu and prevent it from showing in
    the player's list of perks in the character menu. Used for perks
    meant for [Items](../../Manual/Items/Items.md).
