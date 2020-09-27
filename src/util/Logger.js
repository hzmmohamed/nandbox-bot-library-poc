const winston = require("winston");
const path = require("path");
const error_file = path.join(__dirname, "../logs/error.log");
const info_file = path.join(__dirname, "../logs/info.log");
const DailyRotateFile = require("winston-daily-rotate-file");
module.exports = class Logger {
  static logger = winston.createLogger({
    level: "info",
    transports: [
      // new winston.transports.Console(),
      new winston.transports.DailyRotateFile({
        filename: error_file,
        level: "error",
        maxSize: "20m",
        maxFiles: "14d",
      }),
      new winston.transports.DailyRotateFile({
        filename: info_file,
        maxSize: "20m",
        maxFiles: "14d",
      }),
    ],
  });

  static info(message) {
    console.log(message);
    this.logger.info(message);
  }
  static error(message) {
    console.error(message);
    this.logger.error(message);
  }
};
