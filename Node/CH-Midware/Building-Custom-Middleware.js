const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json()); // Enable parsing of JSON object

app.use(function (req, res, next) {
  console.log("Logging....");
  next(); // Call next() to pass control to the next midware function. Without doing this, we're not termiate the request response cycle. Our request will hang indefinitely
})

const courses = [
  { id: 1, name: "courses1" },
  { id: 2, name: "courses2" },
  { id: 3, name: "courses3" },
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body); // get the req.body.error
  if (error) return res.status(400).send(error);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on the port ${port}...`));
