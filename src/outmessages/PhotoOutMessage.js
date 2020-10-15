"use strict";
const OutMessage = require("./OutMessage");
/**
 * This class represents Output Message used to send Photo file .
 *
 * @author Ahmed A. El-Malatawy @author Amir
 *
 */
module.exports = class PhotoOutMessage extends OutMessage{

    constructor(attr1, att) {
        super();
        this.method = "sendPhoto";
    }

}