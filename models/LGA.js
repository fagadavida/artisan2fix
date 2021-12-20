const { Schema, model } = require("mongoose");

var lgachema = Schema({
  name: {
    type: String,
    required: true,
  },
  stateID: [
    {
      type: Schema.Types.ObjectId,
      ref: "State",
    },
  ],
});

module.exports = model("LGA", lgachema);
