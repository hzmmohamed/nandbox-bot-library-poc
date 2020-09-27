"use strict";
const Photo = require("./Photo");

module.exports = class User {


    constructor(jsonobj){

        if(!jsonobj)
            return;
        this.id =  jsonobj.id;
		this.name =  jsonobj.name;
		this.version =  jsonobj.version;
		this.terminal =  jsonobj.terminal;
		this.type =  jsonobj.type;		
		this.is_bot =  jsonobj.is_bot;
		this.lastSeen =  jsonobj.last_seen;
		this.status =  jsonobj.status;
		this.profile =  jsonobj.profile;


		this.photo = jsonobj.photo != null ? new Photo(jsonobj.photo) : null;
    }

}