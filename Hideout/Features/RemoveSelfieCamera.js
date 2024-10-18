import config from "../data/config"
import { registerWhen } from "../../BloomCore/utils/Utils"

// Registers are credits to Noamm9
// https://github.com/Noamm9/NoammAddons-CT/blob/main/NoammAddons/Features/RemoveSelfieCam.js

registerWhen(register("renderOverlay", () =>
    Client.settings.getSettings().field_74320_O = 0),
() => config().RemoveSelfieCamera && Client.settings.getSettings().field_74320_O == 2 && !config().RemoveWithWitherBlade)

registerWhen(register("renderOverlay", () =>
    Client.settings.getSettings().field_74320_O = 0),
() => config().RemoveSelfieCamera && Client.settings.getSettings().field_74320_O == 2 && config().RemoveWithWitherBlade && isHoldingWitherImpact())

function isHoldingWitherImpact() { // Credits to ChatGPT
    const heldItem = Player.getHeldItem();
    if (!heldItem) return false;

    const nbt = heldItem.getNBT().toObject();
    if (!nbt || !nbt.tag || !nbt.tag.ExtraAttributes || !Array.isArray(nbt.tag.ExtraAttributes.ability_scroll)) {
        return false;
    }

    return (
        nbt.tag.ExtraAttributes.ability_scroll.includes("SHADOW_WARP_SCROLL") &&
        nbt.tag.ExtraAttributes.ability_scroll.includes("IMPLOSION_SCROLL") &&
        nbt.tag.ExtraAttributes.ability_scroll.includes("WITHER_SHIELD_SCROLL")
    );
}
