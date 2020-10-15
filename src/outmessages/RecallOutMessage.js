const OutMessage = require("./OutMessage");

module.exports = class RecallOutMessage extends OutMessage {


    constructor() {
        super();
        this.method = "recallMessage";
    }

}