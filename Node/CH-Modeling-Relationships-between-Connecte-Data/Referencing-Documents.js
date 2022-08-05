const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const Author = mongoose.model(
  "Author",
  new mongoose.Schema({
    name: String,
    bio: String,
    website: String,
  })
);

const Course = mongoose.model(
  "Course",
  new mongoose.Schema({
    name: String,
    //-------------------------------------------------
    author: {
      type: mongoose.Schema.Types.ObjectId,
        ref: "Author", // Here we set a target collection, in this Author property we store an ObjectId that reference an Author Document.
          // And we don't have a proper relationship here, we can store a course with a invalid author, and Mongo dosen't complain about that    
      },
    //-------------------------------------------------
    // Here if we run the createCourse() directly without adding the author property, it will not retrun the object with author as well like this:
    // { _id: 62ebf30c561155592845c123, name: 'Node Course', __v: 0 }
    // Because we only have a name property when we define the Course model, so when we saving a course object, only the property that we have defined in model will be preserved in database.
  })
);

async function createAuthor(name, bio, website) {
  const author = new Author({
    name,
    bio,
    website,
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name,
    author,
  });

  const result = await course.save();
  console.log(result);
}

//createAuthor("Mosh", "My bio", "My Website");

createCourse("Node Course", "62ebf2e3213d9f5288460d2b"); // authorId

