import config from "../data/config"
import renderBeaconBeam from "../../BeaconBeam"
import { GetP3Section, drawTrace, getPhase } from "../utils/stuff"
import { registerWhen } from "../../BloomCore/utils/Utils"

// Guess who made this code (hint: starts with a N and has worked too hard to help me <3)
// @Noamm9 me!

const Terminal_Locations = [
    [ // S1
        [111, 113, 73],
        [111, 119, 79],
        [89, 112, 92],
        [89, 122, 101],
    ],

    [ // S2
        [68, 109, 121] ,
        [59, 120, 121] ,
        [47, 109, 121] ,
        [39, 108, 138] ,
        [40, 124, 122] ,
    ],

    [ // S3
        [-3, 109, 112] ,
        [-3, 109, 93],
        [20, 123, 93],
        [-3, 109, 77],
    ],

    [ // S4
        [41, 109, 29],
        [44, 121, 29],
        [67, 109, 29],
        [72, 115, 47] 
    ]
]


function DoStuff(term, color) {
    Terminal_Locations.forEach((value, index) => {

        if (index != GetP3Section() - 1) return

        value.forEach((termCoords, termNumber) => {
            if (termNumber == term) {
                renderBeaconBeam(
                    termCoords[0], termCoords[1], termCoords[2],
                    color[0], color[1], color[2],
                    0.8, false, 100
                )

                if (config().TermTracers) {
                    drawTrace(
                        termCoords[0], termCoords[1], termCoords[2],
                        color[0], color[1], color[2],
                        0.8, false, 100
                    )
    
                    if (config().TermTracers) {
                        drawTrace(
                            termCoords[0], termCoords[1], termCoords[2],
                            color[0], color[1], color[2],
                        )
                    }
                }
            })
        }
    })
}

registerWhen(register("renderWorld", () => 
    DoStuff(config().WhichTerm, config().TermWaypointsColor)
), () => config().TermWaypoints && getPhase() == "p3")
