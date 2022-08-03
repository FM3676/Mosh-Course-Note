const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err.message));

//-------------------------------------------------

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    // match: /pattern/,
  },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
  },
  author: String,
  tags: {
    type: String,
    validate: {
      isAsync: true,
      validator: function (v, callback) {
        // Do some async work
        const result = v && v.length > 0;
        callback(result);
      },
      message: "A course should be have at least one tag",
    },
  },

  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function () {
      // Using function
      return this.isPublished;
    },
    min: 20,
    max: 200,
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    // name: "Node.js Course",
    author: "Mosh",
    tags: null,
    isPublished: true,
    // price: 15,
  });

  try {
    const result = await course.save();
    console.log(result);
    // await course.validate()
  } catch (ex) {
    //----------------------------------------------------------------
    for (field in ex.errors) {
      console.log(ex.errors[field].message);
    }
  }
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
createCourse();
