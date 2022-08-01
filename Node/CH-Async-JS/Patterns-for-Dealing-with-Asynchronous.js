console.log("Before");

const user = getUser(1);
console.log(user); // undefined

console.log("After");


setTimeout(() => console.log(user), 2000); // undefined

// We can't get the return value directly,
// Callbacks
// Promise
// Async/await
// are the ways how we get treutn


function getUser(id) {
  setTimeout(() => {
    console.log("Reading a user from a database...");
    return { id: id, gitHubUserName: "Jack" };
  }, 2000);
}
