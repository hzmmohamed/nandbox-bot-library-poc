"use strict";

const OutMessage = require("./OutMessage");
/**
 * This class represents Output Message used to send Audio file .
 *
 * @author Ahmed A. El-Malatawy
 *
 */
module.exports = class AudioOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "sendAudio";
    }

}