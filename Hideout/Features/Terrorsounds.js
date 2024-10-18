import config from '../data/config'
import { registerWhen } from "../../BloomCore/utils/Utils"

registerWhen(register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if (name == "tile.piston.out" && pitch == 1 && vol == 3) {
        cancel(event)
        if (config().CustomTerrorSound) {
            World.playSound(config().CustomSound, config().CustomTerrorSoundVolume, config().CustomTerrorSoundPitch)
        }
    }
}).setCriteria("tile.piston.out"), () => config().MuteTerror)

registerWhen(register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if (name == "tile.piston.in" && pitch == 1 && vol == 3) {
        cancel(event)
        if (config().CustomTerrorSound) {
            World.playSound(config().CustomSound, config().CustomTerrorSoundVolume, config().CustomTerrorSoundPitch)
        }
    }
}).setCriteria("tile.piston.in"), () => config().MuteTerror)