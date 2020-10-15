const { Bot, outMessage, outMessageMethods, outMessageTypes } = require("./src");
const config = require("./botconfig.json");

const myBot = new Bot(config.token, config.uri, config.dlServer, config.ulServer);

myBot.on.receive = (incomingMsg) => {
  myBot.send(new outMessageTypes.TextOutMessage(incomingMsg.text, incomingMsg.chat.id));

  myBot.send(
    new outMessage(outMessageMethods.sendMessage, {
      text: incomingMsg.text,
      chat_id: incomingMsg.chat.id,
    })
  );
};

myBot.on.userDetails = (userDetails) => {
  console.log();
};

myBot.start();
