const nbClient = require("./nbClient");
const utils = require("./util");
const fs = require("fs");

module.exports = class Bot {
  /**
   * 
   * @param {*} token 
   * @param {*} uri 
   * @param {*} dlServer 
   * @param {*} ulServer 
   */
  constructor(token, uri, dlServer, ulServer) {
    this.config = { token, uri, dlServer, ulServer };
    const defaultCallbacks = {
      connect: (_api) => {
        this.api = _api;
        console.log("Authenticated");
      },

      receive: (incomingMsg) => {
        console.log("Message Received");
        console.log(incomingMsg);
      },

      // implement other nandbox.Callback() as per your bot need
      receiveObj: (obj) => {
        console.log("received object: ", obj);
      },

      close: () => {},
      error: () => {},
      chatMenuCallback: (chatMenuCallback) => {},
      inlineMessageCallback: (inlineMsgCallback) => {},
      messagAckCallback: (msgAck) => {},
      userJoinedBot: (user) => {},
      chatMember: (chatMember) => {},
      chatAdministrators: (chatAdministrators) => {},
      userStartedBot: (user) => {},
      myProfile: (user) => {},
      userDetails: (user) => {},
      userStoppedBot: (user) => {},
      userLeftBot: (user) => {},
      permanentUrl: (permenantUrl) => {},
      chatDetails: (chat) => {},
      inlineSearch: (inlineSearch) => {},
      blackList: (blackList) => {},
      whiteList: (whiteList) => {},
    };
    this.on = defaultCallbacks;
    this.client = new nbClient(this.config.uri, this.config.token, this.on);
  }

  start() {
    // this.client.authenticate();
    this.client.run();
  }

  uploadFile(filePath) {
    return utils.MediaTransfer.uploadFile(this.config.token, path, this.config.ulServer);
  }
  downloadFile(fileId, savingDirPath, savingFileName) {
    return utils.MediaTransfer.downloadFile(this.config.token, fileId, savingDirPath, savingFileName, this.config.dlServer);
  }
  send(outMsg) {
    this.client.internalWS.send("sendMessage", outMsg);
  }
};
