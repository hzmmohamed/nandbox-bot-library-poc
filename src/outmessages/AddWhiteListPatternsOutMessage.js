const OutMessage = require('../outmessages/OutMessage');
/**
 * @author Hossam
 *
 */
module.exports = class AddWhitelistPatternsOutMessage extends OutMessage {

	constructor() {
		this.method = 'addWhitelistPatterns';
    }
    
}
