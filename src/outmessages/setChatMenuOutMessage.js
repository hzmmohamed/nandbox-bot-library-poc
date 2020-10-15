const OutMessage = require("./OutMessage");

/**
 *
 * This class represents Output Message used to send Chat Menu
 *
 * @author Hossam Mohamed, Amir
 *
 */
module.exports = class SetChatMenuOutMessage extends OutMessage {


    constructor() {
        super();
        this.method = "setChatMenu";
    }

}