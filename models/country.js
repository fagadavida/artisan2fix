const { Schema, model } = require("mongoose");

var countrychema = Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = model("Country", countrychema);
