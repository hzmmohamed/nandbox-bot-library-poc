"use strict";

const OutMessage = require("./OutMessage");

module.exports = class GetChatOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "getChat";
    }

    toJsonObject(){
        let obj = super.toJsonObject();

        if (this.chat_id) obj.chat_id = this.chat_id;

        return obj;
    }
}