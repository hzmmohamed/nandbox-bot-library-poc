"use strict";
const OutMessage = require("./OutMessage");
const Button = require("../data/Button");

module.exports = class SetNavigationButtonOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "setNavigationButton";
    }

}