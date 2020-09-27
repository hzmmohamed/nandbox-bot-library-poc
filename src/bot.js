const nbClient = require("./client");
const utils = require("./util");

exports.Bot = class Bot {
  constructor(token, uri, dlServer, ulServer) {
    this.config = { token, uri, dlServer, ulServer };
    this.api = null;
    this.on = {
      connect: (_api) => {
        this.api = _api;
        console.log("Authenticated");
      },

      receive: (incomingMsg) => {
        console.log("Message Received");

        if (incomingMsg.isTextMsg()) {
          let chatId = incomingMsg.chat.id; // get your chat Id
          let text = incomingMsg.text; // get your text message
          api.sendText(chatId, text); // Sending message back as an Echo
        }
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
  }

  start() {
    nbClient;
  }

  uploadFile(filePath) {
    return utils.MediaTransfer.uploadFile(
      this.config.token,
      path,
      this.config.ulServer
    );
  }
  downloadFile(fileId, savingDirPath, savingFileName) {
    return utils.MediaTransfer.downloadFile(
      this.config.token,
      fileId,
      savingDirPath,
      savingFileName,
      this.config.dlServer
    );
  }



};

exports.outMessageTypes = 