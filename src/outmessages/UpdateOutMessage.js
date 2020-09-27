"use strict";

const OutMessage = require("./OutMessage");

module.exports = class UpdateOutMessage extends OutMessage {
    constructor() {
        super();
        this.method = "updateMessage";
    }

    toJsonObject(){
        let obj = super.toJsonObject();

        if (this.message_id) obj.message_id = this.message_id;
        if (this.text) obj.text = this.text;
        if (this.caption) obj.caption = this.caption;
        if (this.to_user_id) obj.to_user_id = this.to_user_id;
        if (this.chat_id) obj.chat_id = this.chat_id;

        return obj; 
    }
}