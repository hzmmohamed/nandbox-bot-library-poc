"use strict";

const OutMessage = require("./OutMessage");

module.exports = class GetChatAdministratorsOutMessage extends OutMessage {
    constructor() {
        super();
        this.method = "getChatAdministrators";
    }

}