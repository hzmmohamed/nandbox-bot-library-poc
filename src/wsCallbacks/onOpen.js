module.exports = function() {
  this.send("TOKEN_AUTH", { token: this.token, rem: true });
  // this.ping = this.startPing();
};
