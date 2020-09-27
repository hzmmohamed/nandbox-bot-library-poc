/**
 * This class represents incoming Message used to get Audio Message .
 *
 * @author Ahmed A. El-Malatawy @author Amir
 *
 */
module.exports = class Audio {
   
    constructor(obj) {
        this.id = obj.id;
        this.title = obj.title;
        this.performer = obj.performer;
        this.size = obj.size;
        this.duration = obj.duration;
    }

}