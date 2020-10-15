"use strict"

const OutMessage = require("./OutMessage");

module.exports = class LocationOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "sendLocation";
    }

}