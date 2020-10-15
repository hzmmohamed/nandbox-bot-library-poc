const data = require("./data");

exports.Bot = require("./Bot");
exports.outMessageTypes = require("./outmessages");
exports.createBtn = (
  btnCallbackName,
  btnOrder = null,
  btnSpan = null,
  btnTextColor = null,
  btnBgColor = null,
  btnLabel = null,
  btnUrl = null,
  btnQuery = null,
  nextMenu = null,
  chat = null,
  btnIcon = null,
  btnIconBgColor = null
) => {
  const btnObj = {
    button_order: btnOrder,
    button_span: btnSpan,
    button_textcolor: btnTextColor,
    button_bgcolor: btnBgColor,
    button_callback: btnCallbackName,
    button_label: btnLabel,
    button_url: btnUrl,
    button_query: btnQuery,
    next_menu: nextMenu,
    chat: chat,
    button_icon: btnIcon,
    button_icon_bgcolor: btnIconBgColor,
  };
  return new data.Button(btnObj, 2);
};
exports.createRow = (btnArray, rowOrder) => {
  return new data.Row(btnArray, rowOrder);
};
exports.createMenu = (rowArray, menuRef) => {
  return new data.Menu(rowArray, menuRef);
};

exports.outMessageMethods = require("./outmessages/outMessageMethods");

exports.outMessage = require("./outmessages/OutMessage");
exports.data = data;


