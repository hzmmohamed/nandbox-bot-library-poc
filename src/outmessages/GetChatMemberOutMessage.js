"use strict";

const OutMessage = require("./OutMessage");

module.exports = class GetChatMemberOutMessage extends OutMessage {
   

    constructor() {
        super();
        this.method = "getChatMember";
    }

}