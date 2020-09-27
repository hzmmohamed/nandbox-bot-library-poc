const Chat = require('../data/Chat');
const SignupUser = require('../data/SignupUser');

module.exports = class WhiteList {

	constructor(jsonObj) {

		let obj = jsonObj.whitelist;

		this.eop = obj.eop;

		this.chat = obj.chat == null ? null : new Chat(obj.chat);
		
		let usersArrayObj = obj.users;
		this.users = [];
		for (let i = 0; i < usersArrayObj.length(); i++) {
			users[i] = new SignupUser(usersArrayObj[i]);
		}

	}

}
