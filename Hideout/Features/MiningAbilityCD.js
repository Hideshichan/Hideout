import config from "../data/config"
import { MiningAbilityTimerGui } from "../data/config"
import { idkwhatimdoing } from "../utils/idk"
import { registerWhen } from "../../BloomCore/utils/Utils"

let colors = ["§0", "§1", "§2", "§3", "§4", "§5", "§6", "§7", "§8", "§9", "§a", "§b", "§c", "§d", "§e", "§f"]
let startTime, currenttank, cooldown
let text = new Text('').setScale(idkwhatimdoing.MiningAbilityTimerGui.scale * 5).setAlign("CENTER").setShadow(true).setColor(Renderer.YELLOW)
let tanks = {
    "none" : 1,
    "mithril_fuel_tank" : 0.98,
    "titanium_fuel_tank" : 0.96,
    "gemstone_fuel_tank" : 0.94,
    "perfect_fuel_tank" : 0.9
}
let bal = {
    "true" : 0.9,
    "false" : 1
}
let skymall = {
    "true" : 0.8,
    "false" : 1
}
let skymall_toggle = false
let bal_equipped = false
let cooldowns = {
    "Mining Speed Boost" : 120000,
    "Maniac Miner" : 120000,
    "Pickobulus" : 50000,
    "Sheer Force" : 120000,
    "Gemstone Infusion" : 120000,
    "Anomalous Desire" : 120000
}


function getfueltank() {
    const heldItem = Player.getHeldItem();
    if (!heldItem) return "none";

    const nbt = heldItem.getNBT().toObject();
    if (!nbt || !nbt.tag || !nbt.tag.ExtraAttributes || !Array.isArray(nbt.tag.ExtraAttributes.drill_part_fuel_tank)) {
        return "none";
    }

    return (
        nbt.tag.ExtraAttributes.drill_part_fuel_tank
    );
}

registerWhen(register("chat", () =>{
    bal_equipped = true
    ChatLib.chat("bal on")
}).setCriteria("Autopet equipped your [Lvl 100] Bal! VIEW RULE"), () => config().MiningAbilityTimer)

registerWhen(register("chat", () =>{
    bal_equipped = false
    ChatLib.chat("bal off")
}).setCriteria(/Autopet equipped your \[Lvl \d+\] (?!Bal\b)(\w+)! VIEW RULE/), () => config().MiningAbilityTimer)

registerWhen(register("chat", () =>{
    skymall_toggle = true
    ChatLib.chat("skymall on")
}).setCriteria("New buff: -20% Pickaxe Ability cooldowns."), () => config().MiningAbilityTimer)

registerWhen(register("chat", () =>{
    skymall_toggle = false
    ChatLib.chat("skymall off")
}).setCriteria(/^New buff: (?!-20% Pickaxe Ability cooldowns\.$).*/), () => config().MiningAbilityTimer)

registerWhen(register("chat", (ability) => {
    currenttank = getfueltank()
    startTime = Date.now()
    cooldown = cooldowns[ability]
    ChatLib.chat("i no break regex works")
}).setCriteria(/You used your (Mining Speed Boost|Maniac Miner|Pickobulus|Sheer Force|Gemstone Infusion|Anomalous Desire) Pickaxe Ability!/), () => config().MiningAbilityTimer)

registerWhen(register("renderOverlay", () => {
    if (MiningAbilityTimerGui.isOpen() && !startTime) {
        Renderer.scale(idkwhatimdoing.MiningAbilityTimerGui.scale)
        Renderer.drawStringWithShadow(`§c50s`, idkwhatimdoing.MiningAbilityTimerGui.x, idkwhatimdoing.MiningAbilityTimerGui.y)
        return
    }
    if (!startTime) return
    const modified = (cooldown * tanks[currenttank] * bal[bal_equipped.toString()] * skymall[skymall_toggle.toString()]) / 1000
    const remaining = (modified - (Date.now() - startTime?? 0) / 1000).toFixed(2)
    if (remaining < 0) return
    
    Renderer.scale(idkwhatimdoing.MiningAbilityTimerGui.scale)
    Renderer.drawStringWithShadow((`${colors[config().MiningAbilityTimerColor]}${remaining}s`), idkwhatimdoing.MiningAbilityTimerGui.x, idkwhatimdoing.MiningAbilityTimerGui.y)
}), () => config().MiningAbilityTimer)

// TODO: - Custom location + size
//       - Color

register("dragged", (_0, _1, x, y, bn) => {
    if (!MiningAbilityTimerGui.isOpen()) return
    if (bn === 2) return
    idkwhatimdoing.MiningAbilityTimerGui.x = x / idkwhatimdoing.MiningAbilityTimerGui.scale
    idkwhatimdoing.MiningAbilityTimerGui.y = y / idkwhatimdoing.MiningAbilityTimerGui.scale
    idkwhatimdoing.save()
})

register("scrolled", (_0, _1, dir) => {
    if (!MiningAbilityTimerGui.isOpen()) return
    if (dir == 1) idkwhatimdoing.MiningAbilityTimerGui.scale += 0.1
    else idkwhatimdoing.MiningAbilityTimerGui.scale -= 0.1
    idkwhatimdoing.MiningAbilityTimerGui.scale = Math.round(idkwhatimdoing.MiningAbilityTimerGui.scale * 100) / 100
    ChatLib.clearChat(69420) // Prevent clogging chat by deleting the previous message
    ChatLib.clearChat(69421)
    ChatLib.clearChat(69422)
    new Message(`§bHideout §8» §7Current scale: ${idkwhatimdoing.MiningAbilityTimerGui.scale}`).setChatLineId(69420).chat()
    new Message(`§bHideout §8» §7Current x: ${idkwhatimdoing.MiningAbilityTimerGui.x}`).setChatLineId(69421).chat()
    new Message(`§bHideout §8» §7Current y: ${idkwhatimdoing.MiningAbilityTimerGui.y}`).setChatLineId(69422).chat()
    idkwhatimdoing.save()
})