const { Schema, model } = require("mongoose");

var Categorychema = Schema({
  name: {
    type: String,
    required: true,
  },
  descriptions: {
    type: String,
    required: true,
  },
});

module.exports = model("ServiceCategory", Categorychema);
