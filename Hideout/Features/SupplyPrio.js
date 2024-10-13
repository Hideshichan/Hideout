import config from "../data/config";
import { getPre, getCurrentWorld } from "../utils/stuff";
import { registerWhen } from "../../BloomCore/utils/Utils"

// Finding what is missing and notify
registerWhen(register("chat", (player, crate) => {
    pre = getPre()
    let missing = crate
    // Shop Missing
    if (missing == 'Shop'){
        if (pre == 'TRI'){
        Client.showTitle(`${COLOR}GO X Cannon`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'X'){
        Client.showTitle(`${COLOR}GO X Cannon`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SQUARE`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SQUARE`)
        }
    }
    // Triangle Missing
    if (missing == 'Triangle'){
        if (pre == 'TRI'){
        Client.showTitle(`${COLOR}PULL SQUARE`, `${base}NEXT: GRAB SHOP`, 0, 80, 0,)
        ChatLib.chat(`${COLOR}PULL SQUARE \n${COLOR}NEXT: GRAB SHOP`)
        }
        if (pre == 'X'){
        Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SQUARE`)
        }
    }
    //Equals Missing
    if (missing == 'Equals'){
        if (pre == 'TRI'){
        Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'X'){
        Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${COLOR}PULL SQUARE`, `${base}NEXT: GRAB SHOP`, 0, 80, 0,)
        ChatLib.chat(`${COLOR}PULL SQUARE \n${COLOR}NEXT: GRAB SHOP`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SQUARE`)
        }
    }
    // Slash Missing
    if (missing == 'Slash'){
        if (pre == 'TRI'){
        Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SQUARE`)
        }
        if (pre == 'X'){
        Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${COLOR}PULL SQUARE`, `${base}Next: GRAB SHOP`, 0, 80, 0,)
        ChatLib.chat(`${COLOR}PULL SQUARE \n${COLOR}NEXT: GRAB SHOP`)
        }
    }
    // Square Missing
    if (missing == 'Square'){
        if (pre == 'TRI'){
        Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'X'){
        Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
    }
    // X Cannon Missing
    if (missing == 'X Cannon'){
        if (pre == 'TRI'){
        Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre == 'X'){
        Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SQUARE`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${COLOR}GO SHOP`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SHOP`)
        }
        if (pre =='SLASH'){
        Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SQUARE`)
        }
    }
    // X Missing
    if (missing == 'X'){
        if (pre == 'TRI'){
        Client.showTitle(`${COLOR}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'X'){
        Client.showTitle(`${COLOR}PULL SQUARE`, `${base}Next: GRAB SHOP`, 0, 80, 0,)
        ChatLib.chat(`${COLOR}PULL SQUARE \n${COLOR}NEXT: GRAB SHOP`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${COLOR}X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO X CANNON`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${COLOR}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${COLOR}GO SQUARE`)
        }
    }
    ChatLib.chat(`&5&l[&r&dGarbAddons&5&l]&r&c MISSING = ${ missing }`)
}).setCriteria('Party > ${player}: No ${crate}!'), () => config().CratePriority, getCurrentWorld() == "Kuudra")