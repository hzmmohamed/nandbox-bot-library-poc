const { Logger } = require("../util");
const utils = require("../util");

module.exports = async function (status) {
  // log closing info
  Logger.info("INTERNAL: ONCLOSE");
  Logger.info("StatusCode = " + status.code);
  Logger.info("Reason : " + status.reason);
  Logger.info(utils.funcs.formateDate(new Date()));

  // stop ping
  clearInterval(this.pingpong);

  this.callback.onClose();

  //
  if (
    (status.code == 1000 ||
      status.code == 1006 ||
      status.code == 1001 ||
      status.code == 1005) &&
    closingCounter < this.NO_OF_RETRIES_IF_CONN_CLOSED
  ) {
    try {
      Logger.info("Please wait 10 seconds for Reconnecting");
      await utils.sleep(10000);
      closingCounter++;
      Logger.info("Conenction Closing counter is: " + closingCounter);
    } catch (e1) {
      Logger.error(e1);
    }
    this.stopWebSocketClient();
    try {
      this.reconnectWebSocketClient();
    } catch (e) {
      Logger.error(e);
    }
  } else {
    Logger.info("End nandbox client");
    process.exit(0);
  }
};
