const EventEmitter = require("events");

const emitter = new EventEmitter();

//------------------------------------
const url = "http://mylogger.io/log";

function log(message) {
  // Send an HTTP request
  console.log(message);

  // After log the message, we want raise an event
  // And later in the app module we will listen for that event and do something.

  // Raise an event
  emitter.emit("messageLogged", { id: 1, url: "http://" });
}

module.exports = log;
