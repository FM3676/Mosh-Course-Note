const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const express = require("express");
const app = express();
const morgan = require("morgan");

if (app.get("env") === "development") {
  // We can run set NODE_ENV=production, so the morgan will stop working.
  app.use(morgan("tiny"));
  startupDebugger("Morgan enabled..."); // !!!!!!!!!!!!!!!!!!!!!! Replace console.log
}

// Db work
dbDebugger('Connected to the database')

/* 
    Command set DEBUG=app:startup, run the code
    and Command DEBUG=app:db, run the code
    and Command DEBUG= , run the code
    and Command DEBUG=app:startup,app:db, run the code
    and Command DEBUG=app:*(to see all debug information), run the code
*/

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on the port ${port}...`));
