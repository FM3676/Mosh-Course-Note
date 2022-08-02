const { Number } = require("mongoose");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mongo-exercises");

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: Date,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

// Get all the published frontend and backend courses, sort them by their price in a descending order.

async function getCourses() {
  return await Course.find({
    isPublished: true,
    tags: { $in: ["forntend", "backend"] },
  })

    .sort("-price")
    .select("name author price");
}

// Soultion 2
/* 
    .find({ isPublished: true, })
    .or([{ tags: "frontend" }], [{ tags: "bakcend" }]); 
*/

async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
