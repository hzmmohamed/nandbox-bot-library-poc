const OutMessage = require("./OutMessage");

module.exports = class VideoOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "sendVideo";
    }

}