const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err.message));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// To create a Class like course, we need to compiled the schema to model
const Course = mongoose.model("Course", courseSchema);
const course = new Course({
  name: "Node.js Course",
  author: "Mosh",
  tags: ["node", "backend"],
  isPublished: true,
});
