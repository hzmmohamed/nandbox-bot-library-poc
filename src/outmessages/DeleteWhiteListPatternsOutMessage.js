const OutMessage = require('../outmessages/OutMessage');

module.exports = class DeleteWhiteListPatternsOutMessage extends OutMessage {

	constructor() {
		this.method = 'deleteWhitelistPatterns';
	}

	toJsonObject() {
		let obj = super.toJsonObject();
        
        if (this.pattern) obj.pattern = this.pattern;
		
		return obj;
	}
}
