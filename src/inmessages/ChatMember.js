const User = require("../data/User");
const Chat = require("../data/Chat");
module.exports = class ChatMember {
  constructor(jsonObj) {
    let obj = jsonObj.chatMember;

    this.user = obj.user == null ? null : new User(obj.user);
    this.chat = obj.chat == null ? null : new Chat(obj.chat);

    this.type = obj.type;
    this.member_since = obj.member_since;
    this.status = obj.status;
    this.tags = obj.tags;
    this.account_type = obj.account_type;
    this.msisdn = obj.msisdn;
  }
};
