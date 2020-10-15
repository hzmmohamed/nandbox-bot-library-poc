"use strict";
const OutMessage = require("./OutMessage");

module.exports = class TextOutMessage extends OutMessage {
  constructor(text, chatId) {
    super("sendMessage");
    this.text = text;
    this.chat_id = chatId;
  }
};
