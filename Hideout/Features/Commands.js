// just try get it to work lol
import { CloseGame, joininstancecommands, branding, AQUA, getitemNBT } from "../utils/stuff"
import { registerWhen } from "../../BloomCore/utils/Utils"

mpwToggle = false

export function sayCommands() {
  ChatLib.chat('\n&3&lCOMMANDS:')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&6 /hideout (Aliases: /ho, /hide) - &aOpens the config gui\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&6 /hideouthelp (Alias: /hohelp) - &aShows this help menu\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&6 /hideoutjoinhelp (Alias: /hojhelp) - &aDisplays all the options for joininstance commands\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&6 /ep (Aliases: /epearl, /epearls, /pearls) - &aFills stack of pearls\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&6 /ij (Aliases: /ijerry, /ijerrys, /jerrys, /jerries, /ijerries) - &aFills stack of inflatable jerries\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&3 /t{tier} - Enters into the given Kuudra tier\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&3 /f{floor} - Enters into the given dungeon floor\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('\n&3&lPARTY COMMANDS:')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&3 !rifttime - Sends your remaining rift time to party chat (Only works when in the rift)\n')
  ChatLib.chat('&d----------------------------------------------')
  ChatLib.chat('&3 /mpw <player1,player2,...> - Sends a party invite to the given players and warps after they all join, will NOT disband after\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('\n&3&lMINING COMMANDS:')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&3 /swapskymallvalue - Swaps the value of skymall 20% cooldown reduction (from true -> false and vice versa) Useful for testing\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&3 /swapbalvalue - Swaps the value of bal equipped (from true -> false and vice versa) Useful for testing but will recheck upon using an ability\n')
  ChatLib.chat('&d----------------------------------------------\n')
  ChatLib.chat('&3 /debugmac - Lists all the useful things related to the mining ability cooldown to debug the timer\n')
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

function warpParty() {
  if (playercount === playersinparty){
    ChatLib.command(`p warp`)
    mpwToggle = false
  }
}

register("command", (players) =>{
  if (players == "help") {
    branding("Usage: /mpw <player1,player2,...>\nSends a party invite to the given players and warps after they all join, will NOT disband after")
  }
  if (!players) {
    branding("Please enter a name(s).\nSeparate names with a comma and no space (eg: /mpw Deathstreeks,Breefing,15h)")
  }
  mpwToggle = true
  timeout = 500
  playercount = 0
  playersinparty = 0
  players.split(",").forEach(player => {
    setTimeout(() => {
      ChatLib.command(`p ${player}`)
    }, timeout)
    timeout += 500
    playercount++
  })
}).setCommandName("multiplayerwarp").setAliases("mpw")

registerWhen(
  register("chat", () => {
  playersinparty++
  warpParty()
}).setCriteria(/^(.+)? (\w+) joined the party.$/), () => mpwToggle)