import config from "../data/config"
import { registerWhen } from "../../BloomCore/utils/Utils"

let counter = 0

// Pchat stuff
const targetMinis = ['BLADESOUL', 'BARBARIAN DUKE X', 'ASHFANG', 'MAGE OUTLAW', 'MAGMA BOSS'];
registerWhen(register('chat', (boss, event) => {
  if (boss !== targetMinis[config().PickMini]) {
    counter = 0;
    ChatLib.command('pc counter reset');
  } else {
    counter++;
    if (counter === 4) ChatLib.command('pc 4/4 NEED TO RESET');
    else ChatLib.command(`pc ${targetMinis[config().PickMini]}: ${counter}/4`);
  }
}).setCriteria(/^(BLADESOUL|BARBARIAN DUKE X|ASHFANG|MAGE OUTLAW|MAGMA BOSS) DOWN!$/), () => config().MiniTracker)