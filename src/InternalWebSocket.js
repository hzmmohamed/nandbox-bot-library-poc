const { Logger } = require("./util");
const utils = require("./util");
const ws = require("ws");

module.exports = class InternalWebSocket {
  constructor(token, uri, callback) {
    this.NO_OF_RETRIES_IF_CONN_TO_SERVER_REFUSED = 20;
    this.NO_OF_RETRIES_IF_CONN_TIMEDOUT = 10;
    this.NO_OF_RETRIES_IF_CONN_CLOSED = 10;
    this.uri = uri;
    this.callback = callback;
    this.closingCounter = 0;

    this.startPing = () => {
      return setInterval(() => {
        this.session.send(JSON.stringify({ method: "PING" }));
      }, 30000);
    };
    this.on = {
      open: () => {
        Logger.info("INTERNAL: ONCONNECT");
        this.send("TOKEN_AUTH", { token: token, rem: true });
        this.ping = this.startPing();
      },
      close: async (statusCode) => {
        // log closing info
        Logger.info("INTERNAL: ONCLOSE");
        Logger.info("StatusCode = " + statusCode);
        Logger.info(utils.funcs.formatDate(new Date()));

        // stop ping
        clearInterval(this.pingpong);

        this.callback.onClose();

        //
        if (
          (statusCode == 1000 || statusCode == 1006 || statusCode == 1001 || statusCode == 1005) &&
          this.session.OPEN &&
          this.closingCounter < this.NO_OF_RETRIES_IF_CONN_CLOSED
        ) {
          try {
            Logger.info("Please wait 10 seconds for Reconnecting");
            await utils.funcs.sleep(10000);
            this.closingCounter++;
            Logger.info("Conenction Closing counter is: " + this.closingCounter);
            this.reconnectWSSession();
          } catch (err) {
            Logger.error(err);
          }
        } else {
          Logger.info("End nandbox client");
          this.callback.onClose();
          process.exit(0);
        }
      },
      error: (error) => {
        Logger.error("ONERROR: " + error);
        this.callback.onError(new Error(`Couldn't connect to WebSocket server. Check URI.`));
      },
      message: (msg) => {
        let user;
        this.lastMessage = new Date().getUTCMilliseconds();
        // let obj = JSON.parse(msg.data);
        let obj = JSON.parse(msg);
        Logger.info("INTERNAL: ONMESSAGE");
        Logger.info(new Date() + " >>>>>>>>> Update Obj : " + JSON.stringify(obj));
        if (obj.method) {
          Logger.info("method: " + obj.method);
          switch (obj.method) {
            case "TOKEN_AUTH_OK":
              this.callback.onConnect(obj);
              this.closingCounter = 0;

              return;
            case "message":
              this.callback.onReceive(obj);
              return;
            case "chatMenuCallback":
              this.callback.onChatMenuCallBack(obj);
              return;
            case "inlineMessageCallback":
              this.callback.onInlineMessageCallback(obj);
              return;
            case "inlineSearch":
              this.callback.onInlineSearh(obj);
              return;
            case "messageAck":
              this.callback.onMessagAckCallback(obj);
              return;
            case "userJoinedBot":
              user = new User(obj.user);
              this.callback.onUserJoinedBot(user);
              return;
            case "chatMember":
              this.callback.onChatMember(obj);
              return;
            case "myProfile":
              user = new User(obj.user);
              this.callback.onMyProfile(user);
              return;
            case "userDetails":
              user = new User(obj.user);
              this.callback.onUserDetails(user);
              return;
            case "chatDetails":
              let chat = new Chat(obj.chat);
              this.callback.onChatDetails(chat);
              return;
            case "chatAdministrators":
              let chatAdministrators = new ChatAdministrators(obj);
              this.callback.onChatAdministrators(chatAdministrators);
              return;
            case "userStartedBot":
              user = new User(obj.user);
              this.callback.userStartedBot(user);
              return;
            case "userStoppedBot":
              user = new User(obj.user);
              this.callback.userStoppedBot(user);
              return;
            case "userLeftBot":
              user = new User(obj.user);
              this.callback.userLeftBot(user);
              return;
            case "userLeftBot":
              let permenantURL = new PermanentUrl(obj);
              this.callback.permanentUrl(permenantURL);
              return;
            case "blacklist":
              let blackList = new BlackList(obj);
              this.callback.onBlackList(blackList);
              return;
            case "whitelist":
              let whiteList = new WhiteList(obj);
              this.callback.onWhiteList(whiteList);
              return;
            default:
              this.callback.onReceiveObj(obj);
              return;
          }
        } else {
          let error = obj.error;
          Logger.error("Error: " + error);
        }
      },
    };
    this.getWSSession = () => {
      return new ws(this.uri)
        .on("error", (err) => this.on.error(err))
        .on("open", () => this.on.open())
        .on("close", (statusCode) => this.on.close(statusCode))
        .on("message", (msg) => this.on.message(msg));
    };

    this.reconnectWSSession = () => {
      if (this.session) this.session.close();
      Logger.info("Reconnecting to WebSocket Server...");
      this.session = this.getWSSession();
    };

    this.session = this.getWSSession();
  }

  send(method, data) {
    data.method = method;
    data.reference = utils.funcs.generateId();

    const messageStr = JSON.stringify(data);

    if (this.session && this.session.OPEN) {
      Logger.info(new Date() + ">>>>>> Sending Message :" + messageStr);
      this.session.send(messageStr, (err) => {
        if (err) throw err;
      });
    }
  }
};
