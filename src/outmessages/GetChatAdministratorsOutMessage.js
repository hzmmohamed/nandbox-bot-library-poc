"use strict";

const OutMessage = require("./OutMessage");

module.exports = class GetChatAdministratorsOutMessage extends OutMessage {
    constructor() {
        super();
        this.method = "getChatAdministrators";
    }

    toJsonObject() {
		let obj = super.toJsonObject();
        
        if (this.chat_id) obj.chat_id = this,chat_id;
		
		return obj;
	}
}