const Joi = require("joi");
const express = require("express");
const app = express();

app.use(express.json()); // Enable parsing of JSON object

const courses = [
  { id: 1, name: "courses1" },
  { id: 2, name: "courses2" },
  { id: 3, name: "courses3" },
];

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.post("/api/courses", (req, res) => {
  // Never ever trust what client send to us, we shouw always validate input
  //----------------------------------------------
  if (!req.body.name) { // 400 Bad Request
    res.status(400).send("Name is required.");
    return;
  }
  //----------------------------------------------

  // Using Joi to validate input
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    res.status(400).send(result.error);
  }

  //----------------------------------------------
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    res.status(404).send("The course with the given ID was not found.");
  res.send(course);
});

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on the port ${port}...`));
