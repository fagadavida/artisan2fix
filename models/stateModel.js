const { Schema, model } = require("mongoose");

var stateSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  // countryID: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Country",
  //   },
  // ],
});

module.exports = model("State", stateSchema);
