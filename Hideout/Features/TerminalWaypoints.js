import config from "../data/config"
import renderBeaconBeam from "../../BeaconBeam"
import {
    S1_Terminal_Locations_X,
    S1_Terminal_Locations_Y,
    S1_Terminal_Locations_Z,
    S2_Terminal_Locations_X,
    S2_Terminal_Locations_Y,
    S2_Terminal_Locations_Z,
    S3_Terminal_Locations_X,
    S3_Terminal_Locations_Y,
    S3_Terminal_Locations_Z,
    S4_Terminal_Locations_X,
    S4_Terminal_Locations_Y,
    S4_Terminal_Locations_Z
} from "../utils/stuff"

let in_p3 = false

register("chat", (event) => {
    in_p3 = true
}).setCriteria("[BOSS] Storm: I should have known that I stood no chance.")

register("chat", (event) => {
    in_p3 = false
}).setCriteria("The Core entrance is opening!")

register("renderWorld", () =>{
    if (!config().TermWaypoints) return;
    if (!in_p3) return;
    renderBeaconBeam(S1_Terminal_Locations_X[Settings.WhichTerm], S1_Terminal_Locations_Y[Settings.WhichTerm], S1_Terminal_Locations_Z[Settings.WhichTerm], Settings.TermWaypointsColor.getRed(), Settings.TermWaypointsColor.getGreen(), Settings.TermWaypointsColor.getBlue(), 0.8, false, 100)
    renderBeaconBeam(S2_Terminal_Locations_X[Settings.WhichTerm], S2_Terminal_Locations_Y[Settings.WhichTerm], S2_Terminal_Locations_Z[Settings.WhichTerm], Settings.TermWaypointsColor.getRed(), Settings.TermWaypointsColor.getGreen(), Settings.TermWaypointsColor.getBlue(), 0.8, false, 100)
    renderBeaconBeam(S3_Terminal_Locations_X[Settings.WhichTerm], S3_Terminal_Locations_Y[Settings.WhichTerm], S3_Terminal_Locations_Z[Settings.WhichTerm], Settings.TermWaypointsColor.getRed(), Settings.TermWaypointsColor.getGreen(), Settings.TermWaypointsColor.getBlue(), 0.8, false, 100)
    renderBeaconBeam(S4_Terminal_Locations_X[Settings.WhichTerm], S4_Terminal_Locations_Y[Settings.WhichTerm], S4_Terminal_Locations_Z[Settings.WhichTerm], Settings.TermWaypointsColor.getRed(), Settings.TermWaypointsColor.getGreen(), Settings.TermWaypointsColor.getBlue(), 0.8, false, 100)
})