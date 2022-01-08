/**
 * @name EasyMod
 * @version 0.0.2
 * @description Easier way to moderate your community
 * @author Klump
 * @authorId 164191150540980224
 * @invite 5AZmY4V6AU
 * @source https://github.com/sompklump/EasyMod/blob/master/EasyMod.plugin.js
 * @updateUrl https://raw.githubusercontent.com/sompklump/EasyMod/master/EasyMod.plugin.js
 *
 */



module.exports = class Example {
    getName() {return "EasyMod";}
    getVersion() {return "0.0.2";}
    getSource() {return "https://github.com/sompklump/EasyMod/blob/master/EasyMod.plugin.js";}
    getUpdateUrl() {return "https://raw.githubusercontent.com/sompklump/EasyMod/master/EasyMod.plugin.js";}

    load() {}
    start() {
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), this.getUpdateUrl());
        BdApi.alert("Yoo");
        //code here

        //stop coding
    }
    stop() {
        BdApi.alert(":(");
    }
}