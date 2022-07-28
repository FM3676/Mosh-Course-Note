const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(3000, () => console.log('Listening on the port 3000...'))

// We don't have if blocks here.
// We can move some of these rounds to a different file.
// For example, we can move all the rounds related to courses to a new file: courses.js
