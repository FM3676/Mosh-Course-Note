let p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});

let p2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 2...");
    resolve(2);
  }, 2000);
});

// Now we want kick off both asynchronous operation, and when they both completed we want to do something after.
Promise.all([p1, p2]).then((result) => console.log(result)); // [ 1, 2 ]

// If one of them are failed...
p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    reject(new Error("because something failed."));
  }, 2000);
});

Promise.all([p1, p2])
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message)); // because something failed.

p1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Async operation 1...");
    resolve(1);
  }, 2000);
});
// What if we want to kick off multiple asynchronous operation, but do something as soon as one of these  asynchronous operations completed.
// We don't want to wait all of them completed, but do something as soon as first operation completed.

Promise.race([p1, p2]) // Using race()
  .then((result) => console.log(result)) // 1

