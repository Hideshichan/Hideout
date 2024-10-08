import { idkwhatimdoing } from "./utils/idk"
import { sayCommands } from "./Features/Commands"

if (idkwhatimdoing.data.firstload) {
    ChatLib.chat("\n&b&lThanks for downloading Hideout")
    ChatLib.chat("\n&bThe module has the following commands:")
    sayCommands()
    ChatLib.chat("&6If you encounter any bugs or want any features added feel free to dm me on discord (hideshichan) or msg/visit me in game (hideshichan)\n")
    idkwhatimdoing.data.firstload = false
    idkwhatimdoing.data.save()
}