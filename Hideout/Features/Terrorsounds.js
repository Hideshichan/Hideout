import config from '../data/config'
import { registerWhen, getSkyblockItemID } from "../../BloomCore/utils/Utils"

function IsWearingTerror() {
    const helmet = Player.armor.getHelmet()
    const chestplate = Player.armor.getChestplate()
    const leggings = Player.armor.getLeggings()
    const boots = Player.armor.getBoots()

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