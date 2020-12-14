const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema(
  {
    user: {
      type: Object,
      default: {},
      required: true
    },
    shippingAddress: {
      type: Object,
      default: {},
      required: true
    },
    products: {
      type: Array,
      default: [],
      required: true
    },
    price: {
      type: Number,
      default: 0,
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);