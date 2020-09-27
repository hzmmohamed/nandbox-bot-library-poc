module.exports = class MessageAck {

    constructor(jsonObj) {
        let obj = {};

        obj = jsonObj.ack;
        this.message_id = obj.message_id;
        this.reference = obj.reference;
        this.date = obj.date;
    }
    
}