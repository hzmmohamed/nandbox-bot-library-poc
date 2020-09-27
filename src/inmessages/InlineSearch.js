const User = require("../data/User");
const Chat = require("../data/Chat");

module.exports = class InlineSearch {

    constructor(jsonObj) {
        console.log("json " + jsonObj);
        let obj = jsonObj.inlineSearch;

        let fromUser = new User(obj.from);
        this.chat = obj.chat == null ? null : new Chat(obj.chat);
        this.method = obj.method;
        this.from = fromUser;
        this.date = obj.date;
        this.search_id = obj.search_id;
        this.offset = obj.offset;
        this.keywords = obj.keywords;		
    }

}