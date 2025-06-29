// Make sure these go to the right directory 
import Settings from "../../Amaterasu/core/Settings"
import DefaultConfig from "../../Amaterasu/core/DefaultConfig"
import { DisconnectFromServer, RED, BOLD, RESET, AQUA } from "../utils/stuff"

// Moveable shit (maybe)
export const MiningAbilityTimerGui = new Gui()

const DefaultConf = new DefaultConfig("Hideout", "data/settings.json")

// General
.addSwitch({
    category: "General",
    configName: "CloakNotifier",
    title: "Cloak notifier",
    description: "Sends an alert when wither cloak is toggled on/off",
    subcategory: ""
})
.addSwitch({
    category: "General",
    configName: "RemoveSelfieCamera",
    title: "Remove selfie camera",
    description: "Removes selfie camera",
    subcategory: ""
})
.addSwitch({
    category: "General",
    configName: "RemoveWithWitherBlade",
    title: "Only remove when holding wither blade",
    description: "Only removes selfie camera when holding a weapon with wither impact",
    shouldShow(data) {
        return data.RemoveSelfieCamera
    }
})
.addButton({
    category: "General",
    configName: "GithubPage",
    title: "GitHub",
    description: "GitHub page for updating",
    subcategory: "Misc",
    placeHolder: "[ Click me! ]",
    onClick() {
        java.awt.Desktop.getDesktop().browse(new java.net.URI("https://github.com/Hideshichan/Hideout/releases"))
    }
})
.addButton({
    category: "General",
    configName: "ElEpicTroll",
    title: "Click if pro gamer",
    description: "h",
    placeHolder: "[ Click me! ]",
    onClick() {
        Client.currentGui.close()
        setTimeout(() => DisconnectFromServer(
        
            `§cYou are temporarily banned for §r359d 23h 59m 59s §cfrom this server!

            §7Reason:§r Cheating through the use of unfair game game advantages.
            §7Find out more: §b§nhttps://www.hypixel.net/appeal§r

            §7Ban ID: §r#783A8N7C
            §7Sharing your Ban ID may affect the proccessing of your appeal!

            `)

       , 3000)
    }
})

// Rift
.addSwitch({
    category: "Rift",
    configName: "RiftCommands",
    title: "Rift Commands",
    description: "Toggle for rift commands like !rifttime",
    subcategory: ""
})
.addSwitch({
    category: "Rift",
    configName: "RiftTimeNotifier",
    title: "Rift Time Alert",
    description: "Visual alert when you have 10 seconds left",
    subcategory: ""
})
.addSwitch({
    category: "Rift",
    configName: "RiftTimePchatMsg",
    title: "Rift Time Party Message",
    description: "Sends a message in party chat saying you're about to get kicked out",
    subcategory: ""
})

// Mining
.addSwitch({
    category: "Mining",
    configName: "MiningAbilityTimer",
    title: "Mining ability cooldown tracker",
    description: "A (what should be) accurate mining ability cooldown timer",
    subcategory: ""
})
.addButton({
    category: "Mining",
    configName: "moveMiningAbilityTimer",
    title: "Move the gui",
    description: "You can probably set an exact pos somewhere",
    subcategory: "",
    shouldShow(data) {
        return data.MiningAbilityTimer
    },
    onClick() {
        MiningAbilityTimerGui.open()
    }
})
.addSwitch({
    category: "Mining",
    configName: "PotMCheck",
    title: "Do you have Peak of the Mountain 2?",
    description: "Makes the timer more accurate",
    subcategory: "",
    shouldShow(data) {
        return data.MiningAbilityTimer
    }
})
.addDropDown({
    category: "Mining",
    configName: "MiningAbilityTimerColor",
    title: "Change the color",
    description: "A color picker doesnt work with how ive coded it cry about it",
    options: ["§0Black", "§1Dark blue", "§2Dark green", "§3Dark aqua", "§4Dark red", "§5Dark purple", "§6Gold", "§7Gray", "§8Dark gray", "§9Blue", "§aGreen", "§bAqua", "§cRed", "§Light purple", "§eYellow", "§fWhite"],
    value: 0,
    subcategory: "",
    shouldShow(data) {
        return data.MiningAbilityTimer
    }
})

// Dungeons
.addSwitch({
    category: "Dungeons",
    configName: "FireFreezeToggle",
    title: "Fire freeze countdown",
    description: "Provides a visual countdown for when to fire freeze in f3/m3",
    subcategory: ""
})
.addSwitch({
    category: "Dungeons",
    configName: "WishMessage",
    title: "Wish party message",
    description: "Sends a party message for healer to wish in f7/m7",
    subcategory: "F7"
})
.addTextInput({
    category: "Dungeons",
    configName: "WishText",
    title: "Wish message text",
    description: "What will be sent for the wish message",
    value: "",
    placeHolder: "",
    subcategory: "F7",
    shouldShow(data) {
        return data.WishMessage
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "WishAlert",
    title: "Wish alert",
    description: "Sends an alert when maxor enrages",
    subcategory: "F7"
})
.addSwitch({
    category: "Dungeons",
    configName: "SwapMask",
    title: "Mask swap reminder",
    description: "Sends a reminder to put on a mask at a chosen point\nWill §cnot §7remind if any mask is already on",
    subcategory: "F7"
})
.addDropDown({
    category: "Dungeons",
    configName: "WhenMask",
    title: "When to remind",
    description: "When to remind about putting on a mask",
    options: ["Blood finish spawning", "Blood Killed", "Enter boss", "Start of goldor phase"],
    value: 0,
    subcategory: "F7",
    shouldShow(data) {
        return data.SwapMask
    }
})
.addDropDown({
    category: "Dungeons",
    configName: "SwapBack",
    title: "Swap back",
    description: "Reminds you to swap back to main helmet at chosen point",
    options: ["Disabled","End of goldor","End of run"],
    value: 0,
    subcategory: "F7",
    shouldShow(data) {
        return data.SwapMask
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "TermWaypoints",
    title: "Terminal waypoints",
    description: "Choose what terminal (eg. 1st terminal) to set a waypoint (and tracer) to",
    subcategory: "F7"
})
.addSwitch({
    category: "Dungeons",
    configName: "TermTracers",
    title: "Add tracers?",
    description: "Adds a tracer pointing to the chosen terminal",
    subcategory: "F7",
    shouldShow(data) {
        return data.TermWaypoints
    }
})
.addDropDown({
    category: "Dungeons",
    configName: "WhichTerm",
    title: "What term",
    description: "",
    options: ["1st","2nd","3rd","4th"],
    value: 0,
    subcategory: "F7",
    shouldShow(data) {
        return data.TermWaypoints
    }
})
.addColorPicker({
    category: "Dungeons",
    configName: "TermWaypointsColor",
    title: "Waypoint color",
    description: "",
    value: [255, 255, 255, 255],
    subcategory: "F7",
    shouldShow(data) {
        return data.TermWaypoints
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "locationNotif",
    title: "Location notifications",
    description: "Shows a title and plays a sound when a party member is at a location (ee, ss)",
    subcategory: "F7"
})
.addSwitch({
    category: "Dungeons",
    configName: "hidePlayersInP3",
    title: "Hide Players in P3",
    description: "Hides players in terminals",
    subcategory: "F7"
})
.addSwitch({
    category: "Dungeons",
    configName: "onlyAfterLeaping",
    title: "Only after leaping?",
    description: "Only hides (for 2 seconds) after leaping",
    subcategory: "F7",
    shouldShow(data) {
        return data.hidePlayersInP3
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "AutoGFS",
    title: "Auto GFS",
    description: "Automatically runs /gfs for selected things at start of dungeon",
    subcategory: "Misc"
})
.addSwitch({
    category: "Dungeons",
    configName: "GFSPearls",
    title: "Auto GFS Pearls",
    description: "Automatically runs /gfs for ender pearls to fill stack",
    subcategory: "Misc",
    shouldShow(data) {
        return data.AutoGFS
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "GFSJerry",
    title: "Auto GFS Inflatable Jerry",
    description: "Automatically runs /gfs for inflatable jerry to fill stack",
    subcategory: "Misc",
    shouldShow(data) {
        return data.AutoGFS
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "GFSBoom",
    title: "Auto GFS Superboom TNT",
    description: "Automatically runs /gfs for superboom TNT to fill stack",
    subcategory: "Misc",
    shouldShow(data) {
        return data.AutoGFS
    }
})
.addSwitch({
    category: "Dungeons",
    configName: "GFSLeaps",
    title: "Auto GFS Spirit Leaps",
    description: "Automatically runs /gfs for spirit leaps to fill stack",
    subcategory: "Misc",
    shouldShow(data) {
        return data.AutoGFS
    }
})

// Crimson Isle
.addSwitch({
    category: "Crimson Isle",
    configName: "MiniTracker",
    title: "Miniboss tracker",
    description: "Sends a message in pchat on every miniboss kill (display soon)",
    subcategory: ""
})
.addDropDown({
    category: "Crimson Isle",
    configName: "PickMini",
    title: "Which miniboss",
    description: "Pick which miniboss will be tracked",
    options: ["Bladesoul","Barb Duke","Ashfang","Mage Outlaw","Magma Boss"],
    value: 0,
    subcategory: "",
    shouldShow(data) {
        return data.MiniTracker
    }
})

// Kuudra
.addSwitch({
    category: "Kuudra",
    configName: "LLalert",
    title: "Lifeline alert",
    description: `Sends an alert when ${RED}not${RESET} in lifeline range\n${BOLD}${AQUA}Only works in kuudra and when wearing a chestplate with lifeline`,
    subcategory: "General"
})
.addSwitch({
    category: "Kuudra",
    configName: "LLalertSound",
    title: "Adds an anvil sound to the lifeline alert",
    description: `\n${RED}${BOLD}This is VERY loud and annoying.\n${RED}${BOLD}You have been warned.`,
    subcategory: "General",
    shouldShow(data) {
        return data.LLalert
    }
})
.addSwitch({
    category: "Kuudra",
    configName: "MuteTerror",
    title: "Mute annoying terror sounds",
    description: "Self explanatory",
    subcategory: "General"
})
.addSwitch({
    category: "Kuudra",
    configName: "CustomTerrorSoundToggle",
    title: "Replace with custom sound?",
    description: "Replaces the terror sounds with a custom sound",
    subcategory: "General",
    shouldShow(data) {
        return data.MuteTerror
    }
})
.addTextInput({
    category: "Kuudra",
    configName: "CustomTerrorSound",
    title: "What to use as custom sound",
    description: "",
    subcategory: "General",
    shouldShow(data) {
        return data.CustomTerrorSoundToggle && data.MuteTerror
    }
})
.addButton({
    category: "Kuudra",
    configName: "AllSoundsPage",
    title: "List of all sounds",
    description: "Click to see all the available sounds to be used",
    subcategory: "General",
    onClick() {
        java.awt.Desktop.getDesktop().browse(new java.net.URI("https://www.minecraftforum.net/forums/mapping-and-modding-java-edition/mapping-and-modding-tutorials/2213619-1-8-all-playsound-sound-arguments"))
    },
    shouldShow(data) {
        return data.CustomTerrorSoundToggle && data.MuteTerror
    }
})
.addSlider({
    category: "Kuudra",
    configName: "CustomTerrorSoundPitch",
    title: "Pitch",
    description: "Pitch for the custom sound\n1 is default",
    subcategory: "General",
    options: [1, 4],
    value: 1,
    shouldShow(data) {
        return data.CustomTerrorSoundToggle && data.MuteTerror
    }
})
.addSlider({
    category: "Kuudra",
    configName: "CustomTerrorSoundVolume",
    title: "Volume",
    description: "Volume for the custom sound\n1 is default",
    subcategory: "General",
    options: [1, 4],
    value: 1,
    shouldShow(data) {
        return data.CustomTerrorSoundToggle && data.MuteTerror
    }
})
.addSwitch({
    category: "Kuudra",
    configName: "CratePriority",
    title: "Crate Priority",
    description: `Displays what crate is missing and what you should do in each situation.\n${RED}${BOLD}Requires No Pre! from all party members.`,
    subcategory: "P1"
})

const setting = new Settings("Hideout", DefaultConf, "data/ColorScheme.json").setCommand("hideout",["ho","hide"])
    .setPos(10, 10)
    .setSize(80, 80)
    .apply()

export default () => setting.settings