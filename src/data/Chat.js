"use strict";

module.exports = class Chat {

    constructor(obj) {

        if(!obj)
            return;
        this.id = obj.id;
        this.title = obj.title;
        this.name = obj.name;
        this.type = obj.type;
        this.version = obj.version;
        this.language_code = obj.language_code;
        this.regions = obj.regions;
        this.description = obj.description;
        this.category = obj.category;
        this.member_count = obj.member_count;
        this.inviteLink = obj.invite_link;
        this.tagsDefinition = obj.tagsDefinition;

    }



}