import config from "../data/config"
import { RED } from "../utils/stuff"
import { registerWhen } from "../../BloomCore/utils/Utils"

// Massive credits to Noamm9 for the new code so its actually fucking readable :sob:

const SwapTriggermsgs = [
    "[BOSS] The Watcher: That will be enough for now.",
    "[BOSS] The Watcher: You have proven yourself. You may pass.",
    "[BOSS] Maxor: WELL! WELL! WELL! LOOK WHO'S HERE!",
    "[BOSS] Storm: I should have known that I stood no chance."
]

const SwapBackTriggermsgs = [
    "[BOSS] Goldor: ....", 
    "[BOSS] Necron: All this, for nothing..."
]

// const IsBonzoEquipped = () => Player.armor.getHelmet().getName().includes("Bonzo's Mask")
// ^^ this is same thing but easier ig (note for myself)
function IsBonzoEquipped() {
    return Player.armor.getHelmet().getName().includes("Bonzo's Mask")
}
function IsSpiritEquipped() {
    return Player.armor.getHelmet().getName().includes("Spirit Mask")
}

registerWhen(register("chat", (event) => {
    const msg = ChatLib.getChatMessage(event).removeFormatting()
    
    if (msg == SwapTriggermsgs[config().WhenMask]) {
        if (IsBonzoEquipped() || IsSpiritEquipped()) return
        Client.showTitle(`${RED}SWAP MASK`, "", 0, 20, 0)
        return
    }
    
    
    if (config().SwapBack == 0) return;
    if (msg == SwapBackTriggermsgs[config().SwapBack - 1]) {
        if (!IsBonzoEquipped() || !IsSpiritEquipped()) return;
        Client.showTitle(`${RED}SWAP BACK HELMET`, "", 0, 20, 0)
    }
}), () => config().SwapMask)
