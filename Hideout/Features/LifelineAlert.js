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

registerWhen(register("step", () => {
    const health = Player.getHP()
    const lifelineMinimum = 40 * 0.2
    if (health > lifelineMinimum) {
        Client.showTitle(`${RED}NOT LIFELINING!`, "", 0, 20, 0)
    }
}).setDelay(1), () => config().LLalert, getCurrentWorld() == "Kuudra", IsWearingLL())