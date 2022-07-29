const Joi = require("joi");
const express = require("express");
const app = express();
const helmet = require("helmet");
const courses = require('./routes/courses')

app.use(express.json()); // Enable parsing of JSON object
app.use(express.urlencoded({ extended: true })); // With this we can pass array and complicated object using the urlencoded
app.use(express.static("public")); // We put all the static data in the public folder, like imgae text...
app.use(helmet());
app.use('/api/courses', courses)


const port = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Listening on the port ${port}...`));
