const OutMessage = require('../outmessages/OutMessage');
/**
 * @author Hossam
 *
 */
module.exports = class AddWhiteListOutMessage extends OutMessage {

	// private WhiteListUser whiteListUser;
	constructor() {
		this.method = 'addWhitelist';
	}


}
