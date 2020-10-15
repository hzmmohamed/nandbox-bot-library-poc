const OutMessage = require('../outmessages/OutMessage');

module.exports = class DeleteWhiteListPatternsOutMessage extends OutMessage {

	constructor() {
		this.method = 'deleteWhitelistPatterns';
	}

}
