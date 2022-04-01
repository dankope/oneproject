export default {
    username: "Dank",

    Print(msg) {
        console.log(msg);
    },

    PrintLog(msg, color) {
        console.log(msg);
    },


    PrintColor(color, msg) {
        console.log(msg);
    },

    PrintChat(msg) {
        console.log("(Chat) " + msg);
    },

    ExecuteCommand(cmd) { },

    RegisterCallback(callback, fun) { },

    GetUsername() {
        return this.username;
    },

    IsLegitConfigActive(item_id) { },

    IsRageConfigActive(item_id) { }
}