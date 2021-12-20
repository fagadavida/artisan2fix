const { Schema, model } = require("mongoose");

var Serviceschema = Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "ServiceCategory",
    require: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    require: true,
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
  },
});

module.exports = model("Service", Serviceschema);
