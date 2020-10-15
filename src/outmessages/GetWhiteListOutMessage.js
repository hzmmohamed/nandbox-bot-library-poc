const OutMessage = require('../outmessages/OutMessage');

/**
 * @author Hossam
 *
 */
module.exports = class GetWhiteListOutMessage extends OutMessage {

	constructor() {
		this.method = 'getWhitelist';
	}

}
