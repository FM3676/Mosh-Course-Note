const express = require("express");
const app = express();
app.set("view engine", "pug");
app.set("views", "./views"); // default
app.get("/", (req, res) => {
  res.render("index", { title: "My Express App", message: "Hello" });
});

const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on the port ${port}...`));
 