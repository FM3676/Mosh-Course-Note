const winston = require("winston");
require("winston-mongodb");
const config = require("config");
const mongoose = require("mongoose");
const genres = require("./routes/genres");
const customers = require("./routes/customers");
const movies = require("./routes/movies");
const rentals = require("./routes/rentals");
const users = require("./routes/users");
const auth = require("./routes/auth");
const express = require("express");
const error = require("./middleware/error");
const app = express();

// The winston module could only catch the error happend in HTTP Request(GET\POST\DELETE\PUT), the error hanppend in the application will not be recorede
// Eg. throw new Error("Something happend in app.") --> This error will not be logged by winston.
// This is the way we deal with Uncaught Exceptions.
process.on("uncaughtException", (ex) => {
  // console.log("WE GOT AN UNCAUGHT EXCEPTION.");
  winston.error(ex.message, ex);
  process.exit(1);
});

winston.handleExceptions(
  new winston.transports.File({ filename: "uncaughtExceptions.log" })
);

// However, this method could only handle Synchronous error
// Eg. const p = Promise.reject(new Error('Somethind failed miserably!')); p.then(() => consol.log('Done.'));
// This error will not be logged, so this is how we deal with Unhandled Promise Rejections.
process.on("unhandledRejection", (ex) => {
  // console.log("WE GOT AN UNHANDLED REJECTION.");
  winston.error(ex.message, ex);
  process.exit(1);
});

/* 
  CAUTION!!!!

    winston.handleExceptions(
      new winston.transports.File({ filename: "uncaughtExceptions.log" })
    );

  With this, we can handle uncaughtExceptions as well, also unhandledRejection

    process.on("unhandledRejection", (ex) => {
      throw ex;
    });

  In this way, winston will catch the ex automaticly, so we can hadle both of them in less code.
*/

winston.add(winston.transports.File, { filename: "logfile.log" });
winston.add(winston.transports.MongoDB, {
  db: "mongodb://localhost/vidly",
  level: "info",
}); // Only message level > info will be recored(error warn info),

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined");
  process.exit(1);
}
// CMD: set vidly_jwtPrivateKey=mySourceKey

mongoose
  .connect("mongodb://localhost/vidly")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);
app.use("/api/movies", movies);
app.use("/api/rental", rentals);
app.use("/api/users", users);
app.use("/api/auth", auth);

app.use(error);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
