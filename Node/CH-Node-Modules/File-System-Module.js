const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);
// [".git", ".gitignore", "JavaScriptBasic", "JavaScriptOOP", "Moshify", "Node"];

fs.readdir("./", (err, files) => {
  if (err) console.log("Error: " + err);
  else console.log("Result: " + files);
});

// Result: .git,.gitignore,JavaScriptBasic,JavaScriptOOP,Moshify,Node

fs.readdir("$", (err, files) => {
  if (err) console.log("Error: " + err);
  else console.log("Result: " + files);
});

// Error: Error: ENOENT: no such file or directory, scandir 'D:\MicrosoftVSCode\WebFrontEnd\MoshCourse\$'

// !! Always using Asynchronous function !!