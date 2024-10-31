import config from "../data/config";
import { getPre, getCurrentWorld, LIGHT_PURPLE, BOLD, AQUA, branding, RED } from "../utils/stuff";
import { registerWhen } from "../../BloomCore/utils/Utils"


// CREDITS TO the_garbageman09
// https://www.chattriggers.com/modules/v/CratePriority


//Getting the pre
registerWhen(register("chat", () => {
    pre = getPre()
}).setCriteria("[NPC] Elle: Head over to the main platform, I will join you when I get a bite!"), () => config().CratePriority && getCurrentWorld() == "Kuudra")

// Finding what is missing and notify
registerWhen(register("chat", (player, crate) => {
    let missing = crate
    // Shop Missing
    if (missing == 'Shop'){
        if (pre == 'TRI'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X Cannon`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'X'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X Cannon`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SQUARE`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SQUARE`)
        }
    }
    // Triangle Missing
    if (missing == 'Triangle'){
        if (pre == 'TRI'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}PULL SQUARE`, `${AQUA}NEXT: GRAB SHOP`, 0, 80, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}PULL SQUARE \n$${AQUA}${BOLD}NEXT: GRAB SHOP`)
        }
        if (pre == 'X'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SQUARE`)
        }
    }
    //Equals Missing
    if (missing == 'Equals'){
        if (pre == 'TRI'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'X'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}PULL SQUARE`, `${AQUA}NEXT: GRAB SHOP`, 0, 80, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}PULL SQUARE \n${AQUA}${BOLD}NEXT: GRAB SHOP`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SQUARE`)
        }
    }
    // Slash Missing
    if (missing == 'Slash'){
        if (pre == 'TRI'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SQUARE`)
        }
        if (pre == 'X'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}PULL SQUARE`, `${AQUA}Next: GRAB SHOP`, 0, 80, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}PULL SQUARE \n${AQUA}${BOLD}NEXT: GRAB SHOP`)
        }
    }
    // Square Missing
    if (missing == 'Square'){
        if (pre == 'TRI'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SHOP`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SHOP`)
        }
        if (pre == 'X'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SHOP`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SHOP`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
    }
    // X Cannon Missing
    if (missing == 'X Cannon'){
        if (pre == 'TRI'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SHOP`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SHOP`)
        }
        if (pre == 'X'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SQUARE`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SHOP`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SHOP`)
        }
        if (pre =='SLASH'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SQUARE`)
        }
    }
    // X Missing
    if (missing == 'X'){
        if (pre == 'TRI'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'X'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}PULL SQUARE`, `${AQUA}Next: GRAB SHOP`, 0, 80, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}PULL SQUARE \n$${AQUA}${BOLD}NEXT: GRAB SHOP`)
        }
        if (pre == 'EQUALS'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}X CANNON`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO X CANNON`)
        }
        if (pre == 'SLASH'){
        Client.showTitle(`${LIGHT_PURPLE}${BOLD}GO SQUARE`, "", 0, 60, 0,)
        ChatLib.chat(`${LIGHT_PURPLE}${BOLD}GO SQUARE`)
        }
    }
    branding(`MISSING = ${RED}${ missing }`)
}).setCriteria('Party > ${player}: No ${crate}!'), () => config().CratePriority && getCurrentWorld() == "Kuudra")