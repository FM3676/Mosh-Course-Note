const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});


const port = process.env.PORT || 3000

app.listen(3000, () => console.log(`Listening on the port ${port}...`));

// Run --> Listening on the port 3000...

// Now run set PORT=5000 in cmd.

// Run again --> Listening on the port 5000...