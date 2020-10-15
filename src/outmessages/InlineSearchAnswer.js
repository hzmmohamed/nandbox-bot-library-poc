const OutMessage = require("./OutMessage");

module.exports = class InlineSearchAnswer extends OutMessage{

    constructor() {
        super();
        this.method = "inlineSearchAnswer";
    }
}