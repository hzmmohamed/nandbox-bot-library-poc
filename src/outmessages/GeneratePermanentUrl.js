const OutMessage = require("./OutMessage");

module.exports = class GeneratePermanentUrl extends OutMessage {

    constructor() {
        super();
        this.method = "generatePermanentUrl";
    }

    toJsonObject(){
        let obj = super.toJsonObject();

        if (this.file) obj.file = this.file;
        if (this.param1) obj.param1 = this.param1;

        return obj;
    }
}