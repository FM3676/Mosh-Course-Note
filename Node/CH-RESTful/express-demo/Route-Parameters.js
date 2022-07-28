const express = require("express");
const app = express();

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params); //------/api/posts/2018/2 ----> {"year":"2018","month":"2"}
});

// We use parameters for essiential or required value,
// and query string parameters for anything that is optional

app.get("/api/posts/:year", (req, res) => {
  res.send(req.query); //------Visit /api/posts/2018?sortBy=name (Notice the '?' before 'sortBy') --->  {"sortBy":"name"}
});

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on the port ${port}...`));


