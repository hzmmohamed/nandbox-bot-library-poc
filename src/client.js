// this file makes a websocket client
const ws = require("ws");
const { Logger } = require("./util");
const utils = require("./util");
const wsCallbacks = require("./wsCallbacks/");

module.exports = class nbClient {
  constructor(uri, token) {
    const defaultCallbacks = {
      onConnect: (api) => {},
      onReceive: (incomingMsg) => {Logger.info('Message Received')},
      onReceiveObj: (obj) => {},
      onClose: () => {},
      onError: () => {},
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
      onInlineSearh: (inlineSearch) => {},
      onBlackList: (blackList) => {},
      onWhiteList: (whiteList) => {},
      onScheduleMessage: (incomingScheduleMsg) => {},
    };

    try {
      this.ws = new InternalWebSocket(uri, token, defaultCallbacks);
    } catch (err) {
      console.log(err.message);
    }
  }
};

class InternalWebSocket {
  constructor(uri, token, callbacks) {
    this.NO_OF_RETRIES_IF_CONN_TO_SERVER_REFUSED = 20;
    this.NO_OF_RETRIES_IF_CONN_TIMEDOUT = 10;
    this.NO_OF_RETRIES_IF_CONN_CLOSED = 10;
    this.callbacks = callbacks;

    this.startPing = () => {
      return setInterval(() => {
        this.session.send(JSON.stringify({ method: "PING" }));
      }, 30000);
    };
    this.getWSSession = (uri) => {
      this.session = new ws(uri)
        .on("error", wsCallbacks.onError)
        .on("open", wsCallbacks.onOpen)
        .on("close", wsCallbacks.onClose)
        .on("message", wsCallbacks.onMessage);
    };

    this.getWSSession(uri);
  }
  send(method, data) {
    data.method = method;
    if (this.session && this.session.OPEN) {
      this.session.send(JSON.stringify(data), (err) => {
        throw err;
      });
    }
  }
}
