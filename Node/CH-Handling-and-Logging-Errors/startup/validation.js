const Joi = require("joi");
// A MongoDB ObjectId validator for Joi.
module.exports = function () {
  Joi.objectId = require("joi-objectid")(Joi);
};
