// this file makes a websocket client
const { Logger } = require("./util");
const InternalWebSocket = require("./InternalWebSocket");

module.exports = class nbClient {
  constructor(uri, token, botCbOn) {
    this.uri = uri;
    this.token = token;
    const defaultCallbacks = {
      onConnect: (obj) => {
        Logger.info("====> Your Bot Id is : " + obj.ID);
        Logger.info("====> Your Bot Name is : " + obj.name);
        Logger.info("Client connected.");
        botCbOn.connect();
      },
      onReceive: (incomingMsg) => {
        Logger.info("Message Received");
        botCbOn.receive(incomingMsg.message);
      },
      onReceiveObj: (obj) => {},
      onClose: () => {},
      onError: (err) => {
        console.error(err.message);
      },
      onChatMenuCallBack: (chatMenuCallback) => {},
      onInlineMessageCallback: (inlineMsgCallback) => {},
      onMessagAckCallback: (msgAck) => {},
      onUserJoinedBot: (user) => {},
      onChatMember: (chatMember) => {},
      onChatAdministrators: (chatAdministrators) => {},
      userStartedBot: (user) => {},
      onMyProfile: (user) => {},
      onUserDetails: (user) => {},
      userStoppedBot: (user) => {},
      userLeftBot: (user) => {},
      permanentUrl: (permenantUrl) => {},
      onChatDetails: (chat) => {},
      onInlineSearch: (inlineSearch) => {},
      onBlackList: (blackList) => {},
      onWhiteList: (whiteList) => {},
      onScheduleMessage: (incomingScheduleMsg) => {},
    };

    try {
      this.internalWS = new InternalWebSocket(
        this.token,
        this.uri,
        defaultCallbacks
      );
    } catch (err) {
      console.log(err.message);
    }
  }
  run() {
    this.internalWS.startPing();
  }
  // authenticate(token) {
  //   this.ws.send("TOKEN_AUTH", { token, rem: true });
  // }
};
