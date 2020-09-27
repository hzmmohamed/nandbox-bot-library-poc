"use strict";

var BUTTON_QUERY_LOCATION = "location";
var BUTTON_QUERY_CONTACT = "contact";

module.exports = class Button {

    constructor(obj, option){
        if(option === 1){
            this.button_label = obj;
        } else if (option === 2){
            
            this.button_order = obj.button_order;
            this.button_span = obj.button_span;
            this.button_textcolor = obj.button_textcolor;
            this.button_bgcolor = obj.button_bgcolor;
            this.button_callback = obj.button_callback;
            this.button_label = obj.button_label;
            this.button_url = obj.button_url;
            this.button_query = obj.button_query;
            this.next_menu = obj.next_menu;
            this.chat = obj.chat;
            this.button_icon = obj.button_icon;
            this.button_icon_bgcolor = obj.button_icon_bgcolor;
        }
        return;
    }

}