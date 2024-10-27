import config from "../data/config"
import { RED, getCurrentWorld } from "../utils/stuff"
import { registerWhen } from "../../BloomCore/utils/Utils"

function IsWearingLL() {
    const chestplate = Player.armor.getChestplate()
    if (!chestplate) return false

    const NBT = chestplate.getNBT().toObject()
    if (!NBT || !NBT.tag || !NBT.tag.ExtraAttributes || !NBT.tag.ExtraAttributes.attributes) {
        return false
    }

    return "lifeline" in NBT.tag.ExtraAttributes.attributes
}

registerWhen(register("tick", () => {
    const health = Player.getHP()
    const lifelineMinimum = 40 * 0.2
    if (health > lifelineMinimum) {
        if (config().LLalertSound) {
            World.playSound("random.anvil_land", 0.2, 1)
        }
        Client.showTitle(`${RED}NOT LIFELINING!`, "", 0, 2, 0)
    }
}), () => config().LLalert && IsWearingLL() && getCurrentWorld() == "Kuudra")
