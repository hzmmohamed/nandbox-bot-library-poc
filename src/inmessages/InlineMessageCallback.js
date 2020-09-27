const User = require("../data/User");
const Chat = require("../data/Chat");

module.exports = class InlineMessageCallback {


    constructor(jsonObj) {
        let obj = jsonObj.inlineMessageCallback;

        let fromUser = new User(obj.from);
        this.chat = obj.chat == null ? null : new Chat(obj.chat);
        let btnqueryResults = obj.button_query_result == null ? null
            : new ButtonQueryResult(obj.button_query_result);
        this.message_id = obj.message_id;
        this.menu_ref = obj.menu_ref;
        this.reference = obj.reference;
        this.from = fromUser;
        this.button_query_result = btnqueryResults;
        this.button_callback = obj.button_callback;
        this.date = obj.date;
    }
}