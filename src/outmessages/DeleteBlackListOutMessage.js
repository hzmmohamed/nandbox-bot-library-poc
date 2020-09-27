const OutMessage = require('../outmessages/OutMessage');

/**
 * @author Hossam
 *
 */module.exports = class DeleteBlackListOutMessage extends OutMessage {

	constructor() {
		this.method = 'deleteBlacklist';
	}

	toJsonObject() {
		let obj = super.toJsonObject();
        
        if (this.users) obj.users = this.users;
		
		return obj;
	}
}
