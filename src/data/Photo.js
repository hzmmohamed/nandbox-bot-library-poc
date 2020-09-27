"use strict";
const Thumbnail = require("./Thumbnail");

module.exports = class Photo {
 
    constructor(obj) {

        if(!obj)
            return;
        this.id = obj.id;
        this.width = obj.width;
        this.height = obj.height;
        this.size = obj.size;
        this.thumbnail = obj.thumbnail != null ? new Thumbnail(obj.thumbnail) : null;

    }

}