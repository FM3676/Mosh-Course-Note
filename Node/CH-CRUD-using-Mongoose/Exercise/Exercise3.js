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

// Get all the published courses that are $15 more, or have the word 'by' in their title

async function getCourses() {
  return await Course.find({isPublished: true})
      .or([
          { price: { $gte: 15 } },
          { name: /.*by.*/i }
      ])
    .sort("-price")
    .select("name author price");
}
async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
