exports.formatDate = (date) =>
  date.getFullYear() +
  "/" +
  (date.getMonth() + 1) +
  "/" +
  date.getDate() +
  " " +
  date.getHours() +
  ":" +
  date.getMinutes() +
  ":" +
  date.getSeconds();

exports.sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

exports.toJsonObject = (obj) => {
  // Object.key
};

var length = 14;
var timestamp = +new Date();

var _getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

exports.generateId = () => {
  var ts = timestamp.toString();
  var parts = ts.split("").reverse();
  var id = "";

  for (var i = 0; i < length; ++i) {
    var index = _getRandomInt(0, parts.length - 1);
    id += parts[index];
  }

  return Number(id);
};
