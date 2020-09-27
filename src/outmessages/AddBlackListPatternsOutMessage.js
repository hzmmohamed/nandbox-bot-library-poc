const OutMessage = require('../outmessages/OutMessage');
/**
 * @author Hossam
 * @author Amir
 */
module.exports = class AddBlacklistPatternsOutMessage extends OutMessage {

	constructor() {
		this.method = 'addBlacklistPatterns';
	}

}
