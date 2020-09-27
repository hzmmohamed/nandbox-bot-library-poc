const OutMessage = require("./OutMessage");
const Chat = require("../data/Chat");

module.exports = class SetChatOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "setChat";
    }

    toJsonObject(){
        let obj = super.toJsonObject();

        obj.chat = this.chat;

        return obj;
    }
}