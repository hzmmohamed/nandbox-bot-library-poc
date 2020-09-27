module.exports = () => {
  this.send("TOKEN_AUTH", { token, rem: true });
  this.ping = this.startPing();
};