"use strict"

const OutMessage = require("./OutMessage");

module.exports = class LocationOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "sendLocation";
    }

    toJsonObject() {
        let obj = super.toJsonObject();

        if (this.name) obj.name = this.name;
        if (this.details) obj.details = this.details;
        if (this.latitude) obj.latitude = this.latitude;
        if (this.longitude) obj.longitude = this.longitude;

        return obj;
    }
}