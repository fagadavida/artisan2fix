const { Schema, model } = require("mongoose");

var paymentSchema = Schema({
  amount: {
    type: SchemaTypes.Double,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  admin: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = model("Payment", paymentSchema);
