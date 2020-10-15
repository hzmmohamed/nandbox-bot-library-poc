const OutMessage = require('../outmessages/OutMessage');
/**
 * 
 * This class represents Output Message used to send Chat Menu
 * 
 * @author Hossam Mohamed
 *
 */
module.exports = class SetAdminChatMenuOutMessage extends OutMessage {

	constructor() {
		this.method = OutMessageMethod.setAdminChatMenu;
	}

}
