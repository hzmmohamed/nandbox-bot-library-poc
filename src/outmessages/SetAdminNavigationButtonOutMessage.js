<<<<<<< HEAD
const OutMessage = require('../outmessages/OutMessage');
=======
>>>>>>> 71f45e3e7b21005d3b08aca0aa4e2183f4a60a3a
/**
 * 
 * This class represents Output Message used to send Navigation Button
 * 
 * @author Hossam Mohamed
 *
 */
<<<<<<< HEAD
module.exports = class SetAdminNavigationButtonOutMessage extends OutMessage {
=======
export default class SetAdminNavigationButtonOutMessage extends OutMessage {
>>>>>>> 71f45e3e7b21005d3b08aca0aa4e2183f4a60a3a

	constructor() {
		this.method = 'setAdminNavigationButton';
	}
	
	toJsonObject() {
		let obj = super.toJsonObject();
		if (this.navigation_button)  obj.navigation_button = this.navigation_button.toJsonObject();
		
		return obj;
	}
}
