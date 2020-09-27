"use strict";
const OutMessage = require("./OutMessage");

module.exports = class GetUserOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "getUser";
    }

    toJsonObject(){
        let obj = super.toJsonObject();

        if (this.user_id) obj.user_id = this.user_id;

        return obj;
    }
}