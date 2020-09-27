const Chat = require('../data/Chat');
const SignupUser = require('../data/SignupUser');

module.exports =  class BlackList {


	constructor(jsonObj) {

        let obj = jsonObj.blacklist;
        
		this.eop = obj.eop;

		this.chat = obj.chat == null ? null : new Chat(obj.chat);
		let usersArrayObj = obj.users;
		this.users = new SignupUser[usersArrayObj.length()];
		for (let i = 0; i < usersArrayObj.size(); i++) {
			users[i] = new SignupUser(usersArrayObj[i]);
		}

	}

}
