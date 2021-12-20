const { Schema, model } = require("mongoose");

const StatusSchema = Schema({
  name: { type: String, require: true },
});

module.exports = model("Statud", StatusSchema);
