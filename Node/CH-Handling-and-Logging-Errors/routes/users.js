const _ = require("lodash");
const { User, validate } = require("../models/user");
const auth = require("../middleware/auth");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

// Getting current user

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Make sure the user is not already registered
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(_.pick(req.body, ["name", "email", "password"]));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  user = await user.save();

  const token = user.generateAuthToken();

  // For any custom header that we define in our application, we should prefix this header with 'x-' and then give it a name.
  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "name", "email"]));
});


// Logging out on client, do not store the token in server database!!!!!!!!!!!!!!!!!!!!!!!!

module.exports = router;
