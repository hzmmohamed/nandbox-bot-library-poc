const OutMessage = require('../outmessages/OutMessage');

module.exports = class DeleteBlackListPatternsOutMessage extends OutMessage {

	constructor() {
		this.method = 'deleteBlacklistPatterns';
	}

}
