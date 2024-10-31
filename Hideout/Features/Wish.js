import config from "../data/config"
import { BOLD, RED, IsInDungeon } from "../utils/stuff"
import { registerWhen } from "../../BloomCore/utils/Utils"

// Wish party msg
registerWhen(register("chat", () => {
    ChatLib.command(`pc ${config().WishText}`)
}).setCriteria(/^⚠ Maxor is enraged! ⚠$|^\[BOSS\] Goldor: You have done it, you destroyed the factory…$/), () => config().WishMessage && IsInDungeon())

// Wish title
registerWhen(register("chat", () => {
    Client.showTitle("", `${BOLD}${RED}WISH`, 5, 50, 5) 
}).setCriteria(/^⚠ Maxor is enraged! ⚠$|^\[BOSS\] Goldor: You have done it, you destroyed the factory…$/), () => config().WishAlert && IsInDungeon())

// Remove original title
registerWhen(register("RenderTitle", (title, subTitle, event) => {
    if (subTitle.removeFormatting() !== "⚠ Maxor is enraged! ⚠") return; 
    
    cancel(event)
    
    Client.showTitle("", `${BOLD}${RED}WISH`, 5, 50, 5) 
}), () => config().WishAlert && IsInDungeon())
