const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String,
});

const Author = mongoose.model("Author", authorSchema);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    //---------------------------------------
    author: authorSchema,
    //---------------------------------------
  })
);

async function createCourse(name, author) {
  const course = new Course({
    name,
    //-------------------------------------
    author: {
      type: authorSchema,
      required: true,
    },
    //-------------------------------------
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthorWithFindById(courseId) {
  const course = await Course.findById(courseId);
  course.author.name = "Mosh Hamedani";
  course.save();
  // Here we don't code like course.author.save(),sub document could only be saved in the context of their parents
}

async function updateAuthorWithUpdate(courseId) {
  const course = await Course.update(
    { _id: courseId },
    {
      $set: {
        "author.name": "John Smith",
      },
    }
  );
}

async function deleteSubDocument(courseId) {
  const course = await Course.update(
    { _id: courseId },
    {
      $unset: {
        author: "",
      },
    }
  );
}

async function deleteSubDocumentProperty(courseId) {
  const course = await Course.update(
    { _id: courseId },
    {
      $unset: {
        "author.name": "",
      },
    }
  );
}

//createCourse('Node Course', new Author({ name: 'Mosh' }));

// updateAuthorWithFindById("62ebf89ae6f3f7560cda8a94");

// updateAuthorWithUpdate("62ebf89ae6f3f7560cda8a94");
