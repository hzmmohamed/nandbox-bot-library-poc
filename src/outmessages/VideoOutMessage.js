const OutMessage = require("./OutMessage");

module.exports = class VideoOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "sendVideo";
    }

    toJsonObject(){
        let obj = super.toJsonObject();
        
        if (this.video != null) obj.video = video;
        
        return obj;
    }
}