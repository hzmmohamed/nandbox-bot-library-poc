const Thumbnail = require("../data/Thumbnail");
/**
 * This class represents incoming Message used to get Gif Message .
 *
 * @author Ahmed A. El-Malatawy @Amir
 *
 */
module.exports = class Gif {

    constructor(obj) {
        this.id = obj.id;
        this.width = Number(obj.width);
        this.height = Number(obj.height);
        this.size = Number(obj.size);
        this.thumbnail = obj.thumbnail ? new Thumbnail(obj.thumbnail) : null;
    }
}