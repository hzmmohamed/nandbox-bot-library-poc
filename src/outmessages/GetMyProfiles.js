const OutMessage = require("./OutMessage");

module.exports = class GetMyProfiles extends OutMessage{
    constructor() {
        super();
        this.method = "getMyProfiles";
    }
}