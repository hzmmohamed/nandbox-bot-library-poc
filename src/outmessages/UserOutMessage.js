const OutMessage = require("./OutMessage");

module.exports = class UserOutMessage extends OutMessage {
    constructor() {
        this.method = "sendMessage";
    }
}