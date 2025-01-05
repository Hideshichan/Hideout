// @Modified, Credit to Noamm9 from NoammAddons-CT
// https://github.com/Noamm9/NoammAddons-CT/blob/main/NoammAddons/AutoUpDater.js

import {
    fullName,
    branding,
    GREEN,
    getModuleVersion
} from "./utils/stuff"

const File = Java.type("java.io.File")
const URL = Java.type("java.net.URL")
const PrintStream = Java.type("java.io.PrintStream")
const Byte = Java.type("java.lang.Byte")


function urlToFile(url, destination, connecttimeout, readtimeout) { // Thanks doc, u hate my ass way too much but thanks
    const d = new File(destination)
    d.getParentFile().mkdirs()
    const connection = new URL(url).openConnection()
    connection.setDoOutput(true)
    connection.setConnectTimeout(connecttimeout)
    connection.setReadTimeout(readtimeout)
    const IS = connection.getInputStream()
    const FilePS = new PrintStream(destination)
    let buf = new Packages.java.lang.reflect.Array.newInstance(Byte.TYPE, 65536)
    let len
    while ((len = IS.read(buf)) > 0) {
        FilePS.write(buf, 0, len)
    }
    IS.close()
    FilePS.close()
}

register("command", () => UpdateThread.start()).setName(`updateho`)

const UpdateThread = new Thread(() => {
    try {
        urlToFile("https://github.com/Hideshichan/Hideout/releases/download/Release/Hideout.zip", "config/ChatTriggers/modules/HideoutAutoUpdater.zip", 1000, 2000)
        branding(`${GREEN}Processing update request, please wait a few seconds`)
        Thread.sleep(5000)

        branding(`§r §cOld file deleted (version: ${getModuleVersion()}):§6 ${FileLib.deleteDirectory("config/ChatTriggers/modules/Hideout")}`)

        FileLib.unzip(`config/ChatTriggers/modules/HideoutAutoUpdater.zip`, `config/ChatTriggers/modules`)
        branding(`§r §eUnzipping HideoutAutoUpdater.zip`)
        Thread.sleep(5000)

        FileLib.delete("config/ChatTriggers/modules/HideoutAutoUpdater.zip")
        branding(`§r §4[TEMP FILE]§r HideoutAutoUpdater.zip §cDeleted`)
        new TextComponent(ChatLib.getCenteredText(`\n§aFinished Updating! §bClick here to run /ct reload.`)).setClickAction("run_command").setClickValue("/ct load").chat()
        
    } catch (e) {branding(`§rError Updating ${fullName}:\n\n§c${e}`)}
})
