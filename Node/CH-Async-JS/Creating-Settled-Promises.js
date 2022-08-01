// Sometimes we want to create a promise that is already resolved, which is particularly useful in unity test

// Here we simulate a scenario where an asynchronous operation by calling the web service complete successfully.

let p = Promise.resolve({ id: 1 });
p.then((result) => console.log(result)); // { id: 1 }

p = Promise.reject(new Error('reason for rejection'))
p.catch(error => console.log(error))