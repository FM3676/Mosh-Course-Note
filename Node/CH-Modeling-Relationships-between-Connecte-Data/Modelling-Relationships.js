// In the real world, the entities and concepts that we work with, they have some kind of association.
// For example: we have a course Object, a course document. And of course this course has an author. But the author is more than just a name, it's more than just a simple string.
// You may have a collection of author, where we stors author document. And eachauthor document has properties like name, website, image and so on.
// So now we gonna talk about
// How to work with related object.

// There are two approaches.

// Using References (Normalization)--> CONSISTENCY ----------------------------------
// With this approach, we should have a sperate collection for storing our author.
let author = {
  name: "Mosh",
};

// A sperate collection for storing courses.
let course = {
  author: "id",
  // Here we set the author to the ID of an author document in the author collection. So here we are using a references.
  // In relational databases, we have this concept of relationships which enforces data integrity.
  // But in MongoDB or NoSQL databases in genral, we don't really have relationship.
  // So even though we we set the id of an author here, it's actually no association or no relationship between these two documents in the database.
};

// Using Embedded Documents (Denormalization)--> QUERY PERFORMANCE ----------------------------------------
let course = {
  author: {
    name: "Mosh",
  },
};

// Trade off between query performance vs consistency

// Hybrid
let author = {
  name: "Mosh",
  // 50 other properties...
};

let course = {
  author: {
    id: "ref",
    name: "Mosh",
  },
};
// In this way, we can the name of author as soon as possible, and we don't have to store all the author document in course.
