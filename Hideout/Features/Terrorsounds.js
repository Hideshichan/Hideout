import config from '../data/config'
import { registerWhen } from "../../BloomCore/utils/Utils"

registerWhen(register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if (name == "tile.piston.out" && pitch == 1 && vol == 3) {
        cancel(event)
        if (config().CatMode) {
            World.playSound("mob.cat.meow", 2, 1)
        }
    }
}).setCriteria("tile.piston.out"), () => config().MuteTerror)

registerWhen(register("soundPlay", (pos, name, vol, pitch, category, event) => {
    if (name == "tile.piston.in" && pitch == 1 && vol == 3) {
        cancel(event)
        if (config().CatMode) {
            World.playSound("mob.cat.meow", 2, 1)
        }
    }
}).setCriteria("tile.piston.in"), () => config().MuteTerror)