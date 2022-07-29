const Joi = require("joi");
const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");

console.log(`NODE_ENV: ${process.env.NODE_ENV}`); // NODE_ENV: undefined
console.log(`app: ${app.get("env")}`); // app: development
// If we don't set the NODE_ENV, it will be development by default.

app.use(express.json()); // Enable parsing of JSON object
app.use(express.urlencoded({ extended: true })); // With this we can pass array and complicated object using the urlencoded
app.use(express.static("public")); // We put all the static data in the public folder, like imgae text...
app.use(helmet());

if (app.get("env") === "development") {
  // We can run set NODE_ENV=production, so the morgan will stop working.
  app.use(morgan("tiny"));
  console.log("Morgan enabled...");
}

const courses = [
  { id: 1, name: "courses1" },
  { id: 2, name: "courses2" },
  { id: 3, name: "courses3" },
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on the port ${port}...`));
