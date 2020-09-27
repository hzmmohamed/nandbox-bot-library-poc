"use strict";

module.exports = class Menu {

   constructor(rows, menuRef) {
      if (rows && menuRef) {   
         this.menu_ref = menuRef;
         this.rows = rows;
      }
      return;
   }

}