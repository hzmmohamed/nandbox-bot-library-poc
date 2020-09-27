const ButtonQueryResult = require("../data/ButtonQueryResult");
const User =  require("../data/User");
const Chat = require("../data/Chat");

module.exports = class ChatMenuCallback {

    constructor(jsonObj) {
       console.log("json " + JSON.stringify(jsonObj));
        let obj = jsonObj.chatMenuCallback;

        let fromUser = new User(obj.from);
        this.chat = obj.chat == null ? null : new Chat( obj.chat);
        let btnqueryResults = obj.button_query_result == null ? null
            : new ButtonQueryResult( obj.button_query_result);
        this.method = obj.method;
        this.menu_ref = obj.menu_ref;
        this.from = fromUser;
        this.button_query_result = btnqueryResults;
        this.button_callback = obj.button_callback;
        this.next_menu = obj.next_menu;
        this.date = obj.date;
    }

}