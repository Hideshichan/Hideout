import Dungeon from "../../Bloomcore/dungeons/Dungeon"

//String codes are credits to Volcaronitee

//Color codes
export const BLACK = "§0";
export const DARK_BLUE = "§1";
export const DARK_GREEN = "§2";
export const DARK_AQUA = "§3";
export const DARK_RED = "§4";
export const DARK_PURPLE = "§5";
export const GOLD = "§6";
export const GRAY = "§7";
export const DARK_GRAY = "§8";
export const BLUE = "§9";
export const GREEN = "§a";
export const AQUA = "§b";
export const RED = "§c";
export const LIGHT_PURPLE = "§d";
export const YELLOW = "§e";
export const WHITE = "§f";

//Formatting codes
export const OBFUSCATED = "§k";
export const BOLD = "§l";
export const STRIKETHROUGH = "§m";
export const UNDERLINE = "§n";
export const ITALIC = "§o";
export const RESET = "§r";


export const fullName = "§bHideout"
const ChatComponentText = Java.type("net.minecraft.util.ChatComponentText")

export function branding(msg) {
    ChatLib.chat("§bHideout §8» §r" + msg)
}

// Closes your game. Credit to Noamm9
export function CloseGame() {
    Client.getMinecraft().func_71400_g()
}

export const getModuleVersion = () => JSON.parse(FileLib.read("Hideout", "metadata.json")).version

/**
 * Disconnects the client from the server.
 *
 * @param {string} [message=""] - The message to be displayed to the player when they are disconnected.
 * 
 * Credit to Noamm9 (pro coder that i steal from LMAO)
 * Link to his mod: https://github.com/Noamm9/NoammAddons-CT
 */
export function DisconnectFromServer(message= "") {
    Client.getMinecraft().func_147114_u()
    .func_147298_b().func_150718_a(
      new ChatComponentText(message))
}

/**
 * Draws a line from the player's position to the given coordinates.
 * 
 * @param {number} x - The x-coordinate of the position.
 * @param {number} y - The y-coordinate of the position.
 * @param {number} z - The z-coordinate of the position.
 * @param {number} r - The red component of the color (0-255).
 * @param {number} g - The green component of the color (0-255).
 * @param {number} b - The blue component of the color (0-255).
 * @param {number} [a=255] - The alpha component of the color (0-255).
 * @param {number} [lineWidth=3.5] - The width of the line.
 * 
 * Again, credits to Noamm9 (my module is gonna be urs at this rate)
 */
export function drawTrace(x, y, z, r, g, b, a = 255, lineWidth = 3.5) {
  GlStateManager.func_179094_E()
  GL11.glLineWidth(lineWidth)
  GL11.glDisable(GL11.GL_CULL_FACE)
  GL11.glEnable(GL11.GL_BLEND)
  GL11.glBlendFunc(770, 771)
  GL11.glDisable(GL11.GL_TEXTURE_2D)
  GL11.glDepthMask(false)
  GL11.glDisable(GL11.GL_DEPTH_TEST)

  Tessellator.begin(3)
    .colorize(r/255, g/255, b/255, a/255)
    .pos(
      Player.getRenderX(), 
      Player.getRenderY() + Player.getPlayer().func_70047_e(), 
      Player.getRenderZ()
    )
    .pos(x, y, z)
    .draw()


  GL11.glEnable(GL11.GL_CULL_FACE)
  GL11.glDisable(GL11.GL_BLEND)
  GL11.glDepthMask(true)
  GL11.glEnable(GL11.GL_TEXTURE_2D)
  GL11.glEnable(GL11.GL_DEPTH_TEST)
  GlStateManager.func_179121_F()
}

// Please Noamm, let me code some stuff myself :sob:
// But fr credits to him, none of the rework (and my motivation) could be possible w/o him

const P3Sections = [
  { corner1: { x: 90, y: 158, z: 123 }, corner2: { x: 111, y: 105, z: 32 } }, // 1
  { corner1: { x: 16, y: 158, z: 122 }, corner2: { x: 111, y: 105, z: 143 } }, // 2
  { corner1: { x: 19, y: 158, z: 48 }, corner2: { x: -3, y: 106, z: 142 } }, // 3
  { corner1: { x: 91, y: 158, z: 50 }, corner2: { x: -3, y: 106, z: 30 } },  // 4
];

export function GetP3Section() {
  if (getPhase() !== "p3") return
  const playerCoords = { x: Player.getX(), y: Player.getY(), z: Player.getZ() };

  // Check each section
  if (isCoordinateInsideBox(playerCoords, P3Sections[0].corner1, P3Sections[0].corner2)) return 1
  if (isCoordinateInsideBox(playerCoords, P3Sections[1].corner1, P3Sections[1].corner2)) return 2
  if (isCoordinateInsideBox(playerCoords, P3Sections[2].corner1, P3Sections[2].corner2)) return 3
  if (isCoordinateInsideBox(playerCoords, P3Sections[3].corner1, P3Sections[3].corner2)) return 4
    
  return 
}

function isCoordinateInsideBox(coord, corner1, corner2) {
    const min = {
      x: Math.min(corner1.x, corner2.x),
      y: Math.min(corner1.y, corner2.y),
      z: Math.min(corner1.z, corner2.z)
    }

    const max = {
      x: Math.max(corner1.x, corner2.x),
      y: Math.max(corner1.y, corner2.y),
      z: Math.max(corner1.z, corner2.z)
    }

    return coord.x >= min.x && coord.x <= max.x
      && coord.y >= min.y && coord.y <= max.y
      && coord.z >= min.z && coord.z <= max.z;
}

export function getPhase() {
  if (Dungeon.floorNumber != "7") return
  const corner1 = { x: -8, y: 254, z: 147 }
  const corner2 = { x: 134, y: 0, z: -8 }
  let inPhase = null

  if (IsInDungeon() && isCoordinateInsideBox({ x: Player.getX(), y: Player.getY(), z: Player.getZ() }, corner1, corner2)) {

    if (Player.getY() > 210) inPhase = "p1"
    else if (Player.getY() > 155) inPhase = "p2";
    else if (Player.getY() > 100) inPhase = "p3";
    else if (Player.getY() > 45) inPhase = "p4";
    else inPhase = "p5";
    
  }

  return inPhase
}

export function IsInDungeon() {
  return Dungeon.inDungeon
}

export const joininstancecommands = {
  "t1" : "joininstance KUUDRA_NORMAL",
  "t2" : "joininstance KUUDRA_HOT",
  "t3" : "joininstance KUUDRA_BURNING",
  "t4" : "joininstance KUUDRA_FIERY",
  "t5" : "joininstance KUUDRA_INFERNAL",
  "fe" : "joininstance CATACOMBS_ENTRANCE",
  "f1" : "joininstance CATACOMBS_FLOOR_ONE",
  "f2" : "joininstance CATACOMBS_FLOOR_TWO",
  "f3" : "joininstance CATACOMBS_FLOOR_THREE",
  "f4" : "joininstance CATACOMBS_FLOOR_FOUR",
  "f5" : "joininstance CATACOMBS_FLOOR_FIVE",
  "f6" : "joininstance CATACOMBS_FLOOR_SIX",
  "f7" : "joininstance CATACOMBS_FLOOR_SEVEN",
  "m1" : "joininstance MASTER_CATACOMBS_FLOOR_ONE",
  "m2" : "joininstance MASTER_CATACOMBS_FLOOR_TWO",
  "m3" : "joininstance MASTER_CATACOMBS_FLOOR_THREE",
  "m4" : "joininstance MASTER_CATACOMBS_FLOOR_FOUR",
  "m5" : "joininstance MASTER_CATACOMBS_FLOOR_FIVE",
  "m6" : "joininstance MASTER_CATACOMBS_FLOOR_SIX",
  "m7" : "joininstance MASTER_CATACOMBS_FLOOR_SEVEN"
}

export function getPre() {
  const x = Player.getX()
  const y = Player.getY()
  const z = Player.getZ()
  if (z > -100){
    if(x > -90){
      pre = 'EQUALS';
    }
    if(x < -90){
      pre = 'SLASH';
    }
  }
  if ( z < -100){
    if ( x > -90){
      pre = 'TRI';
    }
    if ( x < -90){
      pre = 'X';
    }
  }
  return pre
}

export function getCurrentWorld() {
  if (!World.isLoaded()) return
    
  const match = TabList.getUnformattedNames().join().match(/(Area|Dungeon): ([\w\d ]+)/)
  if (!match) return null

  return match[2]
}