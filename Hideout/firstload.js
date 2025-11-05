import { idkwhatimdoing } from "./utils/idk"

if (idkwhatimdoing.firstload) {
    ChatLib.chat("\n&b&lThanks for downloading Hideout")
    ChatLib.chat(new TextComponent(`§b&lClick here to see commands!`).setClick("run_command", "/hohelp").setHoverValue('Click to see commands!'))
    ChatLib.chat("&6If you encounter any bugs or want any features added feel free to dm me on discord (hideshichan) or msg/visit me in game (sdfgxi)\n")
    idkwhatimdoing.firstload = false
    idkwhatimdoing.save()
}