// We give 'path' to the function, node assume that it's a Built in module.
// If there it's no Built in module by the name specific here.
// then node look for existing realtive path of file

const path = require('path');

let pathObj = path.parse(__filename);

console.log(pathObj);

/* 
    {
        root: 'd:\\',
        dir: 'd:\\MicrosoftVSCode\\WebFrontEnd\\MoshCourse\\Node\\CH-Node-Modules',
        base: 'Path-Module.js',
        ext: '.js',
        name: 'Path-Module'
    }
*/