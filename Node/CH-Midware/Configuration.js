const express = require("express");
const app = express();
const morgan = require("morgan");
const config = require("config");

// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Name: " + config.get("mail.host"));
// Run the code we can see
// Application Name: My Express App - Development
// Mail Name: dev-mail-server
// And these are come from development.json

// Now we run set NODE_ENV = production
// Run again
// Application Name: My Express App - Production
// Mail Name: pro-mail-server

/* 
    However, we should not store application secret in the configuration file, like password
    because it is visible to anyone who visit the repository.
    So when we deal with the secret, we should store them in the enviorment variable
    For example: run set app_password=1234 and create a custom-environment-variables.json
*/
console.log("Mail Password: " + config.get("mail.password")); // Mail Password: 1234

if (app.get("env") === "development") {
  // We can run set NODE_ENV=production, so the morgan will stop working.
  app.use(morgan("tiny"));
  console.log("Morgan enabled...");
}

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on the port ${port}...`));
