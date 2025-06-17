import config from "../data/config"
import { branding} from "../utils/stuff"
import { registerWhen } from "../../BloomCore/utils/Utils"

// Credits to LeineV3 for most of the code
function Pearls() {
    const PearlStack = Player.getInventory().getItems().find(a => a?.getName() == "§fEnder Pearl")

    if (!PearlStack) {
        ChatLib.command(`gfs ender_pearl 16`)
        branding("Gave 16 Ender Pearls")
        return;
    }

    PearlstoGive = 16 - PearlStack.getStackSize()

    if (PearlstoGive == 0) {
        branding("Already at full stack!")
        return;
    }

    ChatLib.command(`gfs ender_pearl ${PearlstoGive}`)

    if (PearlstoGive == 1) {
        branding(`Gave ${PearlstoGive} Ender Pearl to fill stack`)
        return;
    }

    branding(`Gave ${PearlstoGive} Ender Pearls to fill stack`)
}

function Jerry() {
    const JerryStack = Player.getInventory().getItems().find(a => a?.getName() == "§fInflatable Jerry")

    if (!JerryStack) {
        ChatLib.command(`gfs inflatable_jerry 64`)
        branding("Gave 64 Inflatable Jerry")
        return;
    }

    JerrytoGive = 64 - JerryStack.getStackSize()

    if (JerrytoGive == 0) {
        branding("Already at full stack!")
        return;
    }

    ChatLib.command(`gfs inflatable_jerry ${JerrytoGive}`)

    branding(`Gave ${JerrytoGive} Inflatable Jerry to fill stack`)
}

function BOOM() {
    const BoomStack = Player.getInventory().getItems().find(a => a?.getName() == "§9Superboom TNT")

    if (!BoomStack) {
        ChatLib.command(`gfs superboom_tnt 64`)
        branding("Gave 64 Superboom")
        return;
    }

    BoomToGive = 64 - BoomStack.getStackSize()

    if (BoomToGive == 0) {
        branding("Already at full stack!")
        return;
    }

    ChatLib.command(`gfs superboom_tnt ${BoomToGive}`)

    branding(`Gave ${BoomToGive} Superboom to fill stack`)
}

function Leaps() {
    const LeapStack = Player.getInventory().getItems().find(a => a?.getName() == "§9Spirit Leap")

    if (!LeapStack) {
        ChatLib.command(`gfs spirit_leap 16`)
        branding("Gave 16 Spirit Leaps")
        return;
    }

    LeapsToGive = 16 - LeapStack.getStackSize()

    if (LeapsToGive == 0) {
        branding("Already at full stack!")
        return;
    }

    ChatLib.command(`gfs spirit_leap ${LeapsToGive}`)

    branding(`Gave ${LeapsToGive} Spirit Leaps to fill stack`)
}

register("command", Pearls).setCommandName("ep").setAliases(["epearl", "epearls", "pearls"])
register("command", Jerry).setCommandName("ij").setAliases(["ijerry", "ijerrys", "jerrys", "jerries", "ijerries"])

registerWhen(register("chat", BOOM).setCriteria("Starting in 4 seconds."), () => config().AutoGFS && config().GFSBoom)
registerWhen(register("chat", Pearls).setCriteria("Starting in 3 seconds."), () => config().AutoGFS && config().GFSPearls)
registerWhen(register("chat", Leaps).setCriteria("Starting in 2 second."), () => config().AutoGFS && config().GFSLeaps)
registerWhen(register("chat", Jerry).setCriteria("Starting in 1 seconds."), () => config().AutoGFS && config().GFSJerry)

registerWhen(register("chat", (regex, msg) => {
    cancel(msg)
}).setCriteria(/Moved .+ (Ender Pearl|Inflatable Jerry) from your Sacks to your inventory\./), () => config().GFSPearls || config().GFSJerry)
