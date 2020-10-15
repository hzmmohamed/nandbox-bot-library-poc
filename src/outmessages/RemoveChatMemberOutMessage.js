const OutMessage = require("./OutMessage");

module.exports = class RemoveChatMemberOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "removeChatMember";
    }

}