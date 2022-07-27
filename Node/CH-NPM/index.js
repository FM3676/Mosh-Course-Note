const _ = require("underscore");

// How require function works?
// First it assumes that this module is a Core module, but ther is no Core module called 'underscore'
// So, require thinks, maybe there is a file or a folder called 'underscore' in this project
// but we need to code like './underscore'. Then it will think there is a underscore,js in the same folder
// or in the folder named undersocre has a index.js

// Otherwise, it assume it's in the node_modules

console.log(_.contains([1, 2, 3], 2));
// true
