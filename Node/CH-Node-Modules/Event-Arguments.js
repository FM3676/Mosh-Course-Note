const EventEmitter = require("events");

const emitter = new EventEmitter();

// Register a listner
emitter.on("messageLogged", (arg) => {// arg || e || event
  console.log("Listener called",arg);
});

// Raise an event
emitter.emit("messageLogged", {id:1,url:'http://'});


// Listener called { id: 1, url: 'http://' }