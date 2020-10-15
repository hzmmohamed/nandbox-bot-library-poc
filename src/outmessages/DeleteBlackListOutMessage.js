const OutMessage = require('../outmessages/OutMessage');

/**
 * @author Hossam
 *
 */module.exports = class DeleteBlackListOutMessage extends OutMessage {

	constructor() {
		this.method = 'deleteBlacklist';
	}

}
