"use strict";
const OutMessage = require("./OutMessage");
/**
 * This class represents Output Message used to send Photo file .
 *
 * @author Ahmed A. El-Malatawy @author Amir
 *
 */
module.exports = class PhotoOutMessage extends OutMessage{

    constructor() {
        super();
        this.method = "sendPhoto";
    }

    toJsonObject(){
        let obj = super.toJsonObject();
        
        if (this.photo) obj.photo = this.photo;

        return obj;
    }
}