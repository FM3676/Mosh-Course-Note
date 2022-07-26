const os = require("os");

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);

console.log(`Free Memory: ${freeMemory}`);

// Total Memory: 16969424896
// Free Memory: 10301739008