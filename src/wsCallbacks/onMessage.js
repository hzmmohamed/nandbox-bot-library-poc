const { Logger, funcs } = require("../util");

module.exports = (msg) => {
  let user;
  this.lastMessage = new Date().getUTCMilliseconds();
  Logger.info("INTERNAL: ONMESSAGE");
  Logger.info(new Date() + " >>>>>>>>> Update Obj : " + obj);
  let obj = JSON.parse(mdg.data);
  Logger.info(obj);
  if (obj.method) {
    Logger.info("method: " + method);
    switch (method) {
      case "TOKEN_AUTH_OK":
        Logger.info("authentocated!");
        this.authenticated = true;
        Logger.info("====> Your Bot Id is : " + obj.ID);
        Logger.info("====> Your Bot Name is : " + obj.name);

        this.callback.onConnect(api, obj);

        return;
      case "message":
        this.callback.onReceive(incomingMessage);
        return;
      case "chatMenuCallback":
        this.callback.onChatMenuCallBack(chatMenuCallback);
        return;
      case "inlineMessageCallback":
        this.callback.onInlineMessageCallback(inlineMsgCallback);
        return;
      case "inlineSearch":
        this.callback.onInlineSearh(inlineSearch);
        return;
      case "messageAck":
        this.callback.onMessagAckCallback(msgAck);
        return;
      case "userJoinedBot":
        user = new User(obj.user);
        this.callback.onUserJoinedBot(user);
        return;
      case "chatMember":
        this.callback.onChatMember(chatMember);
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
};
