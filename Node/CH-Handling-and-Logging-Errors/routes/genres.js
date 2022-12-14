const asyncMiddleware = require("../middleware/async");
const auth = require("../middleware/auth");
const { Genre, validate } = require("../models/genre");
const mongoose = require("mongoose");
const express = require("express");
const admin = require("../middleware/admin");
const router = express.Router();

//--------------
router.get(
  "/",
  asyncMiddleware(async (req, res, next) => {
    throw new Error("Could not get the genres.");
    const genres = await Genre.find().sort("name");
    res.send(genres);
  })
);

// Another way: Using express-async-errors model(recommended). require it in index.js at first, then remove the call of asyncMiddleware.
// However, if the model dosen't work in our application, using the asyncMiddleware
//--------------

// Second argument is optionally mddleware.
router.post(
  "/",
  auth,
  asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let genre = new Genre({ name: req.body.name });
    genre = await genre.save();

    res.send(genre);
  })
);

router.put(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const genre = await Genre.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      {
        new: true,
      }
    );

    if (!genre)
      return res.status(404).send("The genre with the given ID was not found.");

    res.send(genre);
  })
);

router.delete(
  "/:id",
  [auth, admin],
  asyncMiddleware(async (req, res) => {
    const genre = await Genre.findByIdAndRemove(req.params.id);

    if (!genre)
      return res.status(404).send("The genre with the given ID was not found.");

    res.send(genre);
  })
);

router.get(
  "/:id",
  asyncMiddleware(async (req, res) => {
    const genre = await Genre.findById(req.params.id);

    if (!genre)
      return res.status(404).send("The genre with the given ID was not found.");

    res.send(genre);
  })
);

module.exports = router;
