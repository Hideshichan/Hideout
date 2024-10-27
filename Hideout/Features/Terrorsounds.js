import config from '../data/config'
import { registerWhen, getSkyblockItemID } from "../../BloomCore/utils/Utils"

function IsWearingTerror() {
    const helmet = Player.armor.getHelmet()
    if (!helmet) return false
    const chestplate = Player.armor.getChestplate()
    if (!chestplate) return false
    const leggings = Player.armor.getLeggings()
    if (!leggings) return false
    const boots = Player.armor.getBoots()
    if (!boots) return false

    return helmet.getName().includes("Terror") || chestplate.getName().includes("Terror") || leggings.getName().includes("Terror") || boots.getName().includes("Terror")
}

registerWhen(register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if (name == "tile.piston.out" && pitch == 1 && vol == 3) {
        cancel(event)
        if (config().CustomTerrorSoundToggle) {
            World.playSound(config().CustomTerrorSound, config().CustomTerrorSoundVolume, config().CustomTerrorSoundPitch)
        }
    }
}).setCriteria("tile.piston.out"), () => config().MuteTerror && IsWearingTerror())

registerWhen(register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if (name == "tile.piston.in" && pitch == 1 && vol == 3) {
        cancel(event)
        if (config().CustomTerrorSoundToggle) {
            World.playSound(config().CustomTerrorSound, config().CustomTerrorSoundVolume, config().CustomTerrorSoundPitch)
        }
    }
}).setCriteria("tile.piston.in"), () => config().MuteTerror && IsWearingTerror())