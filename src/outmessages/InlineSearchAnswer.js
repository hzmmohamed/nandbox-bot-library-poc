const OutMessage = require("./OutMessage");

module.exports = class InlineSearchAnswer extends OutMessage{

    constructor() {
        super();
        this.method = "inlineSearchAnswer";
    }

    toJsonObject(){
        let obj = super.toJsonObject();

        if (this.results) {
            let resultArrayObj = [];
            for (let i = 0; i < results.length(); i++) {
                resultArrayObj.push(results[i].toJsonObject());
            }
            obj.results = resultArrayObj;
        }

        if (this.search_id) obj.search_id = search_id;
        if (this.next_offset) obj.next_offset = next_offset;

        return obj;
    }
}