const OutMessage = require('../outmessages/OutMessage');

/**
 * @author Hossam
 *
 */
module.exports = class GetBlackListOutMessage extends OutMessage {

	constructor() {
		this.method = 'getBlacklist';
	}

}
