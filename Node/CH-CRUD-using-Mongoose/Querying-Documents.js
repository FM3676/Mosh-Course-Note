const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err.message));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Node.js Course",
    author: "Mosh",
    tags: ["node", "backend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const courses = await Course.find({ author: "Mosh", isPublished: true }) // A filter, only return the courses that author is Mosh and isPbulished
    .limit(10) // and only return 10 documents
    .sort({ name: 1 }) // Sort by name in ascending order, -1 means descending order.
    .select({ name: 1, tags: 1 });// Select the propeties that we want to return.
  console.log(courses);
}

getCourses();
