"use strict";

const OutMessage = require("./OutMessage");

module.exports = class BanChatMemberOutMessage extends OutMessage {
    

    constructor() {
        super();
        this.method = "banChatMember";
    }

}