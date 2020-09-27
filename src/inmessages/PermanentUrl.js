/**
 * it represents Message Ack Object , the message Object is representing Server
 * Messages with method : message_ack
 *
 * @author Ahmed A. El-Malatawy, Amir
 *
 */
module.exports = class PermanentUrl {

    constructor(jsonObj) {
        this.url = jsonObj.url;
        this.file= jsonObj.file;
        this.param1 = jsonObj.param1;	
    }


}