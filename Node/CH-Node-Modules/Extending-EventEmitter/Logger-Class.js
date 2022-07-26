const EventEmitter = require("events");

//------------------------------------
const url = "http://mylogger.io/log";

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message);

    // After log the message, we want raise an event
    // And later in the app module we will listen for that event and do something.

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
