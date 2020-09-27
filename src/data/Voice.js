/**
 * This class represents incoming Message used to get Voice Message .
 *
 * @author Ahmed A. El-Malatawy @author Amir
 *
 */
module.exports = class Voice {

    constructor(obj) {
        this.id = obj.id;
        this.duration = obj.duration;
        this.size = obj.size;
    }

}