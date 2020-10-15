"use strict";
const outMessageMethods = require("./outMessageMethods");

module.exports = class OutMessage {
  static WEB_PREVIEW_DISABLE() {
    return 1;
  }
  static WEB_PREVIEW_HIDE_LINK() {
    return 2;
  }
  static WEB_PREVIEW_INSTANCE_VIEW() {
    return 3;
  }
  static WEB_PREVIEW_INSTANCE_WITHOUT_LINK() {
    return 4;
  }

  constructor(method, attributes = {}) {
    if (Object.values(outMessageMethods).includes(method)) {
      this.method = method;
      Object.keys(attributes).forEach((key) => {
        this[key] = attributes[key];
      });
    } else {
      throw new Error("Invalid Method");
    }
  }
};
