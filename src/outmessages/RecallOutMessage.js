const OutMessage = require("./OutMessage");

module.exports = class RecallOutMessage extends OutMessage {


    constructor() {
        super();
        this.method = "recallMessage";
    }

    toJsonObject(){
        let obj = super.toJsonObject();

        if (this.message_id) obj.message_id = this.message_id;
        if (this.from_user_id) obj.from_user_id = this.from_user_id;

        return obj;
    }
}