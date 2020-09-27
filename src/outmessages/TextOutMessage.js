"use strict";
const OutMessage = require("./OutMessage");

module.exports = class TextOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "sendMessage"; 
    }

    toJsonObject(){
        let obj = super.toJsonObject();
        if (this.text)
            obj.text = this.text;
        if (this.bg_color)
            obj.bg_color = this.bg_color;
        return obj;
    }
}