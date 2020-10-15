const OutMessage = require('../outmessages/OutMessage');

/**
 * @author Hossam
 *
 */
module.exports = class DeleteWhiteListOutMessage extends OutMessage {

	constructor() {
		this.method = 'deleteWhitelist';
	}

}
