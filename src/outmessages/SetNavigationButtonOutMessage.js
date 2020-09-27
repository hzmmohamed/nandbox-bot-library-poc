"use strict";
const OutMessage = require("./OutMessage");
const Button = require("../data/Button");

module.exports = class SetNavigationButtonOutMessage extends OutMessage {

    constructor() {
        super();
        this.method = "setNavigationButton";
    }

    toJsonObject(){
        let obj = super.toJsonObject();
        if (this.navigation_buttons){
            let navBtnArrayObj = [];
            for(let i = 0; i < navigationButtons.length(); ++i){
                navBtnArrayObj.push(this.navigation_buttons[i].toJsonObject());
            }
        }

        return obj;
    }
}