const Joi = require("joi");
const express = require("express");
const app = express();
const helmet = require("helmet");
const morgan = require("morgan");

app.use(express.json()); // Enable parsing of JSON object
app.use(express.urlencoded({ extended: true })); // With this we can pass array and complicated object using the urlencoded
app.use(express.static("public")); // We put all the static data in the public folder, like imgae text...
app.use(helmet());
app.use(morgan('tiny'));

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

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on the port ${port}...`));
