import { Storage } from "./storage";

// TODO: add jsdoc comments
// TODO: Make logger a class?

class LoggerStorageFormatter {
    static coerceData(raw) {
        return raw.split("\n");
    }

    /**
     * 
     * @param {Array<String>} data Holds a list of every log
     * @returns Raw data to be sent to the storage system.
     */
    static coerceRaw(data) {
        return data.join("\n");
    }
}

let storage;

function save() {
    storage.save();
}

function init(fileName) {
    storage = new Storage(fileName, LoggerStorageFormatter);
}

function notify(msg) {
    Cheat.PrintLog("[{{PROJECTNAME}}] " + msg, [255, 255, 255, 255]);
    storage.data.push(msg);
}

function log(msg) {
    Cheat.Print("[onetap] [{{PROJECTNAME}}] " + msg + "\n");
    storage.data.push(msg);
}

function warning(msg) {
    Cheat.PrintLog("[{{PROJECTNAME}}] " + msg, [255, 140, 0, 255]);
    storage.data.push("[warning] " + msg);
}

function error(msg) {
    Cheat.PrintLog("[{{PROJECTNAME}}] " + msg.substring(0, 246), [255, 0, 0, 255]);
    storage.data.push("[error] " + msg);
}

function debug(msg) {
    Cheat.Print("[onetap] [{{PROJECTNAME}}] debug(" + msg.substring(0, 230) + ")\n");
    storage.data.push("[debug] " + msg);
}

// TODO: trace_levels needs to be stored locally per thread, we cant expect them to run sync'd
let trace_levels = [];

let trace = {
    enter(level) {
        trace_levels.push(level);
        storage.data.push("entering level " + level + "...");
    },

    log(msg) {
        Cheat.Print("[onetap] [{{PROJECTNAME}}] [" + levels.join("/") + "] " + msg + "\n");
        storage.data.push("[" + levels.join("/") + "] " + msg);
    },

    leave() {
        removedLevel = trace_levels.pop();
        storage.data.push("leaving level " + removedLevel + "...");
    }
};

export { init, notify, log, warning, error, debug, trace, save };