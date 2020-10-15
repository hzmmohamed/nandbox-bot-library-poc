"use strict";

const OutMessage = require("./OutMessage");

/**
 *
 * This class represents Output Message used to send Contact Message .
 *
 * @author Ahmed A. El-Malatawy @author Amir
 *
 */
module.exports = class ContactOutMessage extends OutMessage {
    

    constructor() {
        super();
        this.method = "sendContact";
    }

} 