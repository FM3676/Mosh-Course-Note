const express = require("express");
const router = express.Router();

const courses = [
  { id: 1, name: "courses1" },
  { id: 2, name: "courses2" },
  { id: 3, name: "courses3" },
];


router.get("/api/courses", (req, res) => {
  res.send(courses);
});

router.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body); // get the req.body.error
  if (error) return res.status(400).send(error);

  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

router.put("/:id", (req, res) => {
  // Look up the course
  // If not existing, return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send("The course with the given ID was not found.");

  // Validate
  // If invalid, return 400 - Bad Request

  const { error } = validateCourse(req.body); // get the req.body.error
  if (error) return res.status(400).send(error);

  // Upadate course
  course.name = req.body.name;
  // Return the updated course
  res.send(course);
});


module.exports = router;