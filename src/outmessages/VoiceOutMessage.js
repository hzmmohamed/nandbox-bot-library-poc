"use strict";

const OutMessage = require("./OutMessage");
/**
 * This class represents Output Message used to send Voice file .
 *
 * @author Ahmed A. El-Malatawy @author Amir
 *
 */
module.exports = class VoiceOutMessage extends OutMessage {
  constructor() {
    super();
    this.method = "sendVoice";
  }
};
