const OutMessage = require('../outmessages/OutMessage');
/**
 * This class represents Output Message used to send Voice file .
 * 
 * @author Hossam Mohamed
 *
 */

module.exports = class ArticleOutMessage extends OutMessage {


	constructor() {
		this.method = "sendArticle";
	}

}
