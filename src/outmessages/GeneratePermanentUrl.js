const OutMessage = require("./OutMessage");

module.exports = class GeneratePermanentUrl extends OutMessage {

    constructor() {
        super();
        this.method = "generatePermanentUrl";
    }

}