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
  const pageNumber = 2;
  const pageSize = 10;

  const courses = await Course.find({ author: "Mosh", isPublished: true })
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);
}

async function removeCourseOne(id) {
  const result = await Course.deleteOne({ _id: id }); // This method will find the first one and delete
  console.log(result);
}

async function removeCourseMultiply(id) {
  const result = await Course.deleteMany({ isPublished: false });
  console.log(result);
}

async function removeCoursWithReturn(id) {
  const course = await Course.findByIdAndRemove(id);
  console.log(course);
}

removeCoursWithReturn("62e8d99134cbcf0f78a6885f");
