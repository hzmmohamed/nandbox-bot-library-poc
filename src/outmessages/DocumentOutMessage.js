"use strict";

const OutMessage = require("./OutMessage");
/**
 * This class represents Output Message used to send Document file .
 *
 * @author Ahmed A. El-Malatawy @author Amir
 *
 */
module.exports = class DocumentOutMessage extends OutMessage {
   

    constructor() {
        super();
        this.method = "sendDocument";
    }

} 