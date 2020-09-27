module.exports = class Result {

    constructor(obj) {
        if (!obj) return;

        this.id = obj.id;
        this.caption = obj.caption;
        this.title = obj.title;
        this.description = obj.description;
        this.url = obj.url;
        this.type = obj.type;
        this.thumb_url = obj.thumb_url;
        
        this.width = obj.width;
        this.height = obj.height;		
    }

}