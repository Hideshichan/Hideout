// just try get it to work lol
import { CloseGame, joininstancecommands, branding, AQUA, getitemNBT } from "../utils/stuff"

export function sayCommands() {
  ChatLib.chat('\n&3&lCOMMANDS:')
  ChatLib.chat('&d----------------------------------------------\n')
  new Message().addTextComponent(new TextComponent('&6/hideout (Aliases: /ho, /hide)').setClickValue('/ho').setClickAction('run_command')).addTextComponent(new TextComponent('- &aOpens the gui\n')).chat()
  ChatLib.chat('&d----------------------------------------------\n')
  new Message().addTextComponent(new TextComponent('&6/hideouthelp (Alias: /hohelp)').setClickValue('/hohelp').setClickAction('run_command')).addTextComponent(new TextComponent('- &aShows this help menu\n')).chat()
  ChatLib.chat('&d----------------------------------------------\n')
  new Message().addTextComponent(new TextComponent('&6/hideoutjoinhelp (Alias: /hojhelp)').setClickValue('/hothelp').setClickAction('run_command')).addTextComponent(new TextComponent('- &aDisplays all the options for joininstance commands\n')).chat()
  ChatLib.chat('&d----------------------------------------------\n')
  new Message().addTextComponent(new TextComponent('&6/ep (Aliases: /epearl, /epearls, /pearls)').setClickValue('/ep').setClickAction('run_command')).addTextComponent(new TextComponent('- &aFills stack of pearls\n')).chat()
  ChatLib.chat('&d----------------------------------------------\n')
  new Message().addTextComponent(new TextComponent('&6/ij (Aliases: /ijerry, /ijerrys, /jerrys, /jerries, /ijerries)').setClickValue('/ij').setClickAction('run_command')).addTextComponent(new TextComponent('- &aFills stack of inflatable jerries\n')).chat()
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&3 /t{tier} - Enters into the given Kuudra tier\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&3 /f{floor} - Enters into the given dungeon floor\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('\n&3&lPARTY COMMANDS:')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&3 !rifttime - Sends your remaining rift time to party chat\n')
  ChatLib.chat('&d----------------------------------------------')
}

register('command', () => {
  sayCommands()
}).setName('hideouthelp').setAliases('hohelp')

register("command", () => {
  branding(`&3&lValid join instance shortcuts:`)
  for (let key in joininstancecommands) {
    ChatLib.chat(`${AQUA}"/${key}" runs command: "/${joininstancecommands[key]}"\n`);
  }
}).setName("hideoutjoinhelp").setAliases("hojhelp")

register("command", CloseGame).setName(`closegame`)

register("chat", (rank, name, tier) => {
  switch (tier) {
    case "1":
      convertedtier = "t1"
      break
    case "2":
      convertedtier = "t2"
      break
    case "3":
      convertedtier = "t3"
      break
    case "4":
      convertedtier = "t4"
      break
    case "5":
      convertedtier = "t5"
      break
    default:
      branding("Not a valid tier of kuudra!")
      console.log("Error while running kuudra party command")
      return
  }
  branding(`Attemping to enter kuudra tier ${tier}`)
  ChatLib.command(joininstancecommands[convertedtier])
}).setCriteria(/Party >( .+)? (\w+): !t(\d+)/)

Object.keys(joininstancecommands).forEach(cmd => {
  register("command", () => {
      ChatLib.command(`${joininstancecommands[cmd]}`)
  }).setName(cmd)
})

register("command", () => {
  branding("Logged held item's NBT to console")
  getitemNBT()
}).setCommandName("GETITEMNBT")