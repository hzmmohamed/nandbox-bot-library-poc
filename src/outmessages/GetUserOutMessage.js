"use strict";
const OutMessage = require("./OutMessage");

module.exports = class GetUserOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "getUser";
    }

}