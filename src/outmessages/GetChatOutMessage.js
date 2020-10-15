"use strict";

const OutMessage = require("./OutMessage");

module.exports = class GetChatOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "getChat";
    }

}