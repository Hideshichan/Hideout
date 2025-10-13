import config from "../data/config"
import { MiningAbilityTimerGui } from "../data/config"
import { idkwhatimdoing } from "../utils/idk"
import { registerWhen } from "../../BloomCore/utils/Utils"
import { branding, RED, RESET, GREEN, GOLD, YELLOW, DARK_RED } from "../utils/stuff"

let colors = ["§0", "§1", "§2", "§3", "§4", "§5", "§6", "§7", "§8", "§9", "§a", "§b", "§c", "§d", "§e", "§f"]
let startTime, currenttank, cooldown, modified
let tanks = {
    "none" : 1,
    "mithril_fuel_tank" : 0.98,
    "titanium_fuel_tank" : 0.96,
    "gemstone_fuel_tank" : 0.94,
    "perfectly_cut_fuel_tank" : 0.9
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
    "Mining Speed Boost1" : 120000,
    "Mining Speed Boost2" : 120000,
    "Mining Speed Boost3" : 120000,

    "Maniac Miner1" : 120000,
    "Maniac Miner2" : 120000,
    "Maniac Miner3" : 120000,

    "Pickobulus1" : 60000,
    "Pickobulus2" : 50000,
    "Pickobulus3" : 40000,

    "Sheer Force1" : 120000,
    "Sheer Force2" : 120000,
    "Sheer Force3" : 120000,

    "Gemstone Infusion1" : 120000,
    "Gemstone Infusion2" : 120000,
    "Gemstone Infusion3" : 120000,

    "Tunnel Vision1" : 120000,
    "Tunnel Vision2" : 110000,
    "Tunnel Vision3" : 100000,
}
let level = 1
let lastability = ""


function getfueltank() {
    const heldItem = Player.getHeldItem();
    if (!heldItem) return "none";

    const nbt = heldItem.getNBT().toObject();
    if (!nbt || !nbt.tag || !nbt.tag.ExtraAttributes || !nbt.tag.ExtraAttributes.drill_part_fuel_tank) {
        return "none";
    }

    return (
        nbt.tag.ExtraAttributes.drill_part_fuel_tank
    );
}

function checkForBlegg() {
    const heldItem = Player.getHeldItem();
    if (!heldItem) return false;

    const nbt = heldItem.getNBT().toObject();
    if (!nbt || !nbt.tag || !nbt.tag.ExtraAttributes || !nbt.tag.ExtraAttributes.drill_part_upgrade_module) {
        return false;
    }

    return nbt.tag.ExtraAttributes.drill_part_upgrade_module === "goblin_omelette_blue_cheese";
}

function getTankColor(tank) {
    if (tank === "perfectly_cut_fuel_tank") return GREEN;
    if (tank === "gemstone_fuel_tank") return GOLD;
    if (tank === "titanium_fuel_tank") return YELLOW;
    if (tank === "mithril_fuel_tank") return RED;
    if (tank === "none") return DARK_RED;
    return RESET; // Default for any unknown tank
}

function calculateCooldown(ability) {
    if (!ability) return null;
    level = 1 + config().PotMCheck + checkForBlegg() // This adds a level if PotM is lvl 2+ and another if Blegg is equipped, so lvl 3 total
    currenttank = getfueltank()
    const baseCooldown = cooldowns[ability + level.toString()];

    return cooldown = Math.floor((baseCooldown * tanks[currenttank] * bal[bal_equipped.toString()] * skymall[skymall_toggle.toString()]) / 1000);
    //branding(`Cooldown of ${ability} after reductions: ${cooldown}s`)
}

register('command', () => {
    branding("Debug info for Mining Ability Cooldown Timer:")
    level = 1 + config().PotMCheck + checkForBlegg()
    
    if (lastability === "") {
        branding("No ability used yet - use a mining ability or do /setability <abilityname>")
        return
    }
    
    branding(`Last ability used: ${lastability}, cooldown before reductions: ${cooldowns[lastability+level.toString()]}s`)
    bal_equipped = balTabCheck()
    const clickableMessage = new Message(
        new TextComponent(`§bHideout §8» §rBal: ${bal_equipped ? GREEN : RED}${bal_equipped}${RESET}`).setClick("run_command", "/swapbalvalue").setHoverValue('Click if incorrect!'),
        new TextComponent(`\n§bHideout §8» §rSkymall: ${skymall_toggle ? GREEN : RED}${skymall_toggle}${RESET}`).setClick("run_command", "/swapskymallvalue").setHoverValue('Click if incorrect!')
    );
    ChatLib.chat(clickableMessage)
    //branding(`Bal: ${bal_equipped}`)
    //branding(`Skymall: ${skymall_toggle}`)
    branding(`Tank: ${getTankColor(getfueltank())}${getfueltank()}${RESET}`)
    branding(`Blegg: ${checkForBlegg() ? GREEN : RED}${checkForBlegg()}${RESET}`)
    branding(`Level: ${level}`)

    branding(`Cooldown of ${lastability} after reductions: ${calculateCooldown(lastability)}s\n`)
}).setName('debugmac')

register('command', () => {
    const oldValue = skymall_toggle;
    skymall_toggle = !skymall_toggle // Just incase it bugs like usual
    
    const clickableMessage = new Message(
        new TextComponent(`§bHideout §8» §rSkymall set from ${oldValue ? GREEN : RED}${oldValue}${RESET} to ${skymall_toggle ? GREEN : RED}${skymall_toggle}${RESET}`).setClick("run_command", "/swapskymallvalue").setHoverValue('Click to toggle again!')
    );
    ChatLib.chat(clickableMessage)
    
    branding(`Cooldown of ${lastability} after change: ${calculateCooldown(lastability)}s`)
}).setName('swapskymallvalue')

register('command', () => {
    const oldValue = bal_equipped;
    bal_equipped = !bal_equipped // Just incase ur using bal and not rod swap
    
    const clickableMessage = new Message(
        new TextComponent(`§bHideout §8» §rBal set from ${oldValue ? GREEN : RED}${oldValue}${RESET} to ${bal_equipped ? GREEN : RED}${bal_equipped}${RESET}`).setClick("run_command", "/swapbalvalue").setHoverValue('Click to toggle again!')
    );
    ChatLib.chat(clickableMessage)
    
    branding(`Cooldown of ${lastability} after change: ${calculateCooldown(lastability)}s`)
}).setName('swapbalvalue')

register('command', (ability) => {
    if (!ability) {
        branding("Invalid ability name! Valid names are: Mining Speed Boost, Maniac Miner, Pickobulus, Sheer Force, Gemstone Infusion, Tunnel Vision")
        return
    }
    
    // Find the correct ability name with case-insensitive matching
    const correctAbility = Object.keys(cooldowns).find(ab => ab.toLowerCase().startsWith(ability.toLowerCase()))?.replace(/\d+$/, '')
    
    if (!correctAbility) {
        branding("Invalid ability name! Valid names are: Mining Speed Boost, Maniac Miner, Pickobulus, Sheer Force, Gemstone Infusion, Tunnel Vision")
        return
    }
    
    lastability = correctAbility
    branding(`Ability manually set to ${correctAbility}. Use /debugmac to see info.`)
}).setName('setability')

function balTabCheck() {
    const tablist = TabList.getNames();
    let balString = tablist.findIndex(tab => tab.startsWith(`§r§e§lPet:`));
    if (balString === -1) {
        branding("No pet widget found in tab, assuming bal is not equipped, please enable the widget in /tab for more accurate results")
        return false
    }
    balCheck = tablist[balString + 1]
    balCheck = balCheck.removeFormatting()
    if (balCheck.includes("[Lvl 100] Bal")) {
        branding("Bal found as equipped in tab. Automatically applying cooldown reduction.")
        return true
    }
    else {
        return false
    }
}

registerWhen(register("chat", () =>{
    bal_equipped = true
}).setCriteria("Autopet equipped your [Lvl 100] Bal! VIEW RULE"), () => config().MiningAbilityTimer)

registerWhen(register("chat", () =>{
    bal_equipped = false
}).setCriteria(/Autopet equipped your \[Lvl \d+\] (?!Bal\b)([A-Za-z]+(?: [A-Za-z]+)*)! VIEW RULE/), () => config().MiningAbilityTimer)

registerWhen(register("chat", () =>{
    skymall_toggle = true
}).setCriteria("New buff: -20% Pickaxe Ability cooldowns."), () => config().MiningAbilityTimer)

registerWhen(register("chat", () =>{
    skymall_toggle = false
}).setCriteria(/^New buff: (?!-20% Pickaxe Ability cooldowns\.$).*/), () => config().MiningAbilityTimer)

registerWhen(register("chat", (ability) => {
    lastability = ability
    bal_equipped = balTabCheck()
    level = 1 + config().PotMCheck + checkForBlegg() // This adds a level if PotM is lvl 2+ and another if Blegg is equipped, so lvl 3 total
    currenttank = getfueltank()
    startTime = Date.now()
    cooldown = cooldowns[ability+level.toString()]
    modified = Math.floor((cooldown * tanks[currenttank] * bal[bal_equipped.toString()] * skymall[skymall_toggle.toString()]) / 1000)
}).setCriteria(/You used your (Mining Speed Boost|Maniac Miner|Pickobulus|Sheer Force|Gemstone Infusion|Tunnel Vision) Pickaxe Ability!/), () => config().MiningAbilityTimer)

registerWhen(register("renderOverlay", () => {
    if (MiningAbilityTimerGui.isOpen() && !startTime) {
        Renderer.scale(idkwhatimdoing.MiningAbilityTimerGui.scale)
        Renderer.drawStringWithShadow(`§c50s`, idkwhatimdoing.MiningAbilityTimerGui.x, idkwhatimdoing.MiningAbilityTimerGui.y)
        return
    }
    if (!startTime) return
    const remaining = (modified - (Date.now() - startTime?? 0) / 1000).toFixed(2)
    if (remaining < 0) return
    
    Renderer.scale(idkwhatimdoing.MiningAbilityTimerGui.scale)
    Renderer.drawStringWithShadow((`${colors[config().MiningAbilityTimerColor]}${remaining}s`), idkwhatimdoing.MiningAbilityTimerGui.x, idkwhatimdoing.MiningAbilityTimerGui.y)
}), () => config().MiningAbilityTimer)

register("dragged", (_0, _1, x, y, bn) => {
    if (!MiningAbilityTimerGui.isOpen()) return
    if (bn === 2) return
    idkwhatimdoing.MiningAbilityTimerGui.x = x / idkwhatimdoing.MiningAbilityTimerGui.scale
    idkwhatimdoing.MiningAbilityTimerGui.y = y / idkwhatimdoing.MiningAbilityTimerGui.scale
    ChatLib.clearChat(69421)
    ChatLib.clearChat(69422)
    new Message(`§bHideout §8» §7Current x: ${idkwhatimdoing.MiningAbilityTimerGui.x}`).setChatLineId(69421).chat()
    new Message(`§bHideout §8» §7Current y: ${idkwhatimdoing.MiningAbilityTimerGui.y}`).setChatLineId(69422).chat()
    idkwhatimdoing.save()
})

register("scrolled", (_0, _1, dir) => {
    if (!MiningAbilityTimerGui.isOpen()) return
    if (dir == 1) idkwhatimdoing.MiningAbilityTimerGui.scale += 0.1
    else idkwhatimdoing.MiningAbilityTimerGui.scale -= 0.1
    idkwhatimdoing.MiningAbilityTimerGui.scale = Math.round(idkwhatimdoing.MiningAbilityTimerGui.scale * 100) / 100
    ChatLib.clearChat(69420) // Prevent clogging chat by deleting the previous message
    new Message(`§bHideout §8» §7Current scale: ${idkwhatimdoing.MiningAbilityTimerGui.scale}`).setChatLineId(69420).chat()
    idkwhatimdoing.save()
})
