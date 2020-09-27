const OutMessage = require("./OutMessage");
const User = require("../data/User");

module.exports = class SetMyProfileOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "setMyProfile";
    }

    toJsonObject(){
        let obj = super.toJsonObject();

        obj.user = this.user;

        return obj;
    }
}