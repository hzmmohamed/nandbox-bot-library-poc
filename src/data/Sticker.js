const Thumbnail = require("../data/Thumbnail");
/**
 * @author Hossam @author Amir
 *
 */
module.exports = class Sticker {
    constructor(obj) {
        this.id = obj.id;
        this.width = obj.width;
        this.height = obj.height;
        this.size = obj.size;
        this.thumbnail = obj.thumbnail ? new Thumbnail(obj.thumbnail) : null;
    }


}