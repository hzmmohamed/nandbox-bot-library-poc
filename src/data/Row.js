"use strict";

module.exports = class Row {



    constructor(buttons, rowOrder = 1) {
        this.row_order = rowOrder;
        this.buttons = [];
        if (buttons) 
            for (let i = 0; i < buttons.length; i++)
                this.buttons.push(buttons[i]);
        
        return;
    }


}