import PogObject from "../../PogData"
import { MiningAbilityTimerGui } from "../data/config"

export const idkwhatimdoing = new PogObject("Hideout", {
    firstload: true,
    MiningAbilityTimerGui: {
        x: Renderer.screen.getWidth() / 2,
        y: Renderer.screen.getHeight() / 2,
        scale: 1
    }
}, "data/.data.json")