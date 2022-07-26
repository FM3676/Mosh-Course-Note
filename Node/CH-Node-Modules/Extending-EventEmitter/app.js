// In the real world, it's quiet rear that we will work with that Emitter Obj directly
// Instead, we will create a class that has all the capilities of the EventEmitter and we will use
// that class in our code.

const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register a listner
emitter.on("messageLogged", (arg) => {
  // arg || e || event
  console.log("Listener called", arg);
});

// // Raise an event
// emitter.emit("messageLogged", {id:1,url:'http://'});

const log = require("./logger");
log("message"); // message
// The eventListener will not be called, beacuse here we working on two different EventEmitter.
// One in app.js, the other in logger module.
// So this listener can only register with the EventEmitter in this module.
// That's why we don't work with the EventEmitter directly.
// So here we will create a Class called Logger, which has all the capilities of the EventEmitter and
// and has additional method: log.

const Logger = require("./Logger-Class");
const logger = new Logger();

// Register a listner
logger.on("messageLogged", (arg) => {
  // arg || e || event
  console.log("Listener called", arg);
});

logger.log("message");
// message
// Listener called { id: 1, url: 'http://' }