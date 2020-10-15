"use strict";

const OutMessage = require("./OutMessage");

module.exports = class UnbanChatMember extends OutMessage {

    constructor() {
        super();
        this.method = "unbanChatMember";
    }

}