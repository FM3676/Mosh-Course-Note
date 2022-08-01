// When we create a promise object, it become pending state, and start to work.
const p = new Promise((resolve, reject) => {
    // Kick off some async work
    // ...
    setTimeout(() => {
        resolve(1); // pending => resolved, fulfilled
        // If we got the result, using resolve() to return
        reject(new Error('message')) // pending => rejected
        // If we got error, using rejected() to return.
    },2000)
})

p
    .then(result => console.log('Result: ', result)) // The result value is the parameter of resolve()
    .catch(err => console.log('Error: ', err.message));
    // If we got error, using catch() to accept value, which is the parameter of rejected();