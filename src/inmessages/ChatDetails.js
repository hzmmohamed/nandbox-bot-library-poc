const Chat = require("../data/Chat");

module.exports = class ChatDetails {

    constructor(obj) {
        this.chat = new Chat(obj.chat);
    }

}