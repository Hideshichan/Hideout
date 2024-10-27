import config from "../data/config"
import { RED } from "../utils/stuff"
import { registerWhen, getSkyblockItemID } from "../../BloomCore/utils/Utils"

//Cloak notifications
registerWhen(register("chat", (event) => {
    Client.showTitle(`${RED}CLOAK ON`, "", 0, 15, 0);
}).setCriteria("Creeper Veil Activated!"), () => config().CloakNotifier && getSkyblockItemID() == "WITHER_CLOAK")

registerWhen(register("chat", (event) => {
    Client.showTitle(`${RED}CLOAK OFF`, "", 0, 15, 0);
}).setCriteria(/^(?:Not enough mana! )?Creeper Veil De-activated!(?: \(Expired\))?$/), () => config().CloakNotifier && getSkyblockItemID() == "WITHER_CLOAK")