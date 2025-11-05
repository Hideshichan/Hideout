import config from "../data/config"
import { branding} from "../utils/stuff"
import { registerWhen } from "../../BloomCore/utils/Utils"

// Credits to LeineV3 for most of the code
function Pearls() {
    const PearlStack = Player.getInventory().getItems().find(a => a?.getName() == "§fEnder Pearl")

    if (!PearlStack) {
        setTimeout(() => { // Use settimeout to wait for GFS to not be rate limited (4s timer since joining server)
            ChatLib.command(`gfs ender_pearl 16`)
            branding("Gave 16 Ender Pearls")
        }, 1000)
        return;
    }

    PearlstoGive = 16 - PearlStack.getStackSize()

    if (PearlstoGive == 0) {
        branding("Already at full stack!")
        return;
    }

    setTimeout(() => {
        ChatLib.command(`gfs ender_pearl ${PearlstoGive}`)

        if (PearlstoGive == 1) {
            branding(`Gave ${PearlstoGive} Ender Pearl to fill stack`)
            return;
        }

        branding(`Gave ${PearlstoGive} Ender Pearls to fill stack`)
    }, 1000)
}

function Jerry() {
    const JerryStack = Player.getInventory().getItems().find(a => a?.getName() == "§fInflatable Jerry")

    if (!JerryStack) {
        setTimeout(() => {
            ChatLib.command(`gfs inflatable_jerry 64`)
            branding("Gave 64 Inflatable Jerry")
        }, 1000)
        return;
    }

    JerrytoGive = 64 - JerryStack.getStackSize()

    if (JerrytoGive == 0) {
        branding("Already at full stack!")
        return;
    }

    setTimeout(() => {
        ChatLib.command(`gfs inflatable_jerry ${JerrytoGive}`)
        branding(`Gave ${JerrytoGive} Inflatable Jerry to fill stack`)
    }, 1000)
}

function BOOM() {
    const BoomStack = Player.getInventory().getItems().find(a => a?.getName() == "§9Superboom TNT")

    if (!BoomStack) {
        setTimeout(() => {
            ChatLib.command(`gfs superboom_tnt 64`)
            branding("Gave 64 Superboom")
        }, 1000)
        return;
    }

    BoomToGive = 64 - BoomStack.getStackSize()

    if (BoomToGive == 0) {
        branding("Already at full stack!")
        return;
    }

    setTimeout(() => {
        ChatLib.command(`gfs superboom_tnt ${BoomToGive}`)
        branding(`Gave ${BoomToGive} Superboom to fill stack`)
    }, 1000)
}

function Leaps() {
    const LeapStack = Player.getInventory().getItems().find(a => a?.getName() == "§9Spirit Leap")

    if (!LeapStack) {
        setTimeout(() => {
            ChatLib.command(`gfs spirit_leap 16`)
            branding("Gave 16 Spirit Leaps")
        }, 1000)
        return;
    }

    LeapsToGive = 16 - LeapStack.getStackSize()

    if (LeapsToGive == 0) {
        branding("Already at full stack!")
        return;
    }

    setTimeout(() => {
        ChatLib.command(`gfs spirit_leap ${LeapsToGive}`)
        branding(`Gave ${LeapsToGive} Spirit Leaps to fill stack`)
    }, 1000)
}

register("command", Pearls).setCommandName("ep").setAliases(["epearl", "epearls", "pearls"])
register("command", Jerry).setCommandName("ij").setAliases(["ijerry", "ijerrys", "jerrys", "jerries", "ijerries"])
register("command", BOOM).setCommandName("sb").setAliases(["superboom", "superboomtnt", "boom", "tnt"])
register("command", Leaps).setCommandName("sl").setAliases(["spiritleap", "leap", "leaps"])

registerWhen(register("chat", BOOM).setCriteria("Starting in 4 seconds."), () => config().AutoGFS && config().GFSBoom)
registerWhen(register("chat", Pearls).setCriteria("Starting in 3 seconds."), () => config().AutoGFS && config().GFSPearls)
registerWhen(register("chat", Leaps).setCriteria("Starting in 2 seconds."), () => config().AutoGFS && config().GFSLeaps)
registerWhen(register("chat", Jerry).setCriteria("Starting in 1 seconds."), () => config().AutoGFS && config().GFSJerry)

registerWhen(register("chat", (regex, msg) => {
    cancel(msg)
}).setCriteria(/Moved .+ (Ender Pearl|Inflatable Jerry|Spirit Leap|Superboom TNT) from your Sacks to your inventory\./), () => config().GFSPearls || config().GFSJerry || config().GFSLeaps || config().GFSBoom)
