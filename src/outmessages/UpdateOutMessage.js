"use strict";

const OutMessage = require("./OutMessage");

module.exports = class UpdateOutMessage extends OutMessage {
    constructor() {
        super();
        this.method = "updateMessage";
    }

}