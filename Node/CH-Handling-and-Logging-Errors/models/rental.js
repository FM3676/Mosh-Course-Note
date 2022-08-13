const Joi = require("joi");
const mongoose = require("mongoose");

const Rental = mongoose.model(
  "Rental",
  new mongoose.Schema({
    customer: {
      // We are not reusing the customer scema that we defined in the customer model, becasue the customer could have many properties, we don't have all those properties in this object.
      // We only need those primary properties that we nedd when we dispaly the rental
      type: new mongoose.Schema({
        name: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 50,
        },
        isGold: {
          type: Boolean,
          defalut: false,
        },
        phone: {
          type: String,
          required: true,
          minlength: 5,
          maxlength: 50,
        },
      }),
      required: true,
    },
    movie: {
      type: new mongoose.Schema({
        title: {
          type: String,
          required: true,
          trim: true,
          minlength: 5,
          maxlength: 255,
        },
        dailyRentalRate: {
          type: String,
          required: true,
          min: 0,
          max: 255,
        },
      }),
      required: true,
    },
    dateOut: {
      type: Date,
      required: true,
      default: Date.now,
    },
    dateReturned: {
      type: Date,
    },
    rentalFee: {
      tpye: Number,
      min: 0,
    },
  })
);

function validateRental(rental) {
  const schema = Joi.object({
    customerId: Joi.string().required(),
    movieId: Joi.string().required(),
  });
  return schema.validate(rental);
}

exports.Rental = Rental;
exports.validate = validateRental;
