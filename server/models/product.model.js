const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      maxlength: 50,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      maxlength: 50,
    },
    type: {
      type: String,
    },
    description: {
      type: String,
    },
    images: {
      type: Array,
      default: [],
    },
    sold: {
      type: Number,
      maxlength: 100,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

productSchema.index(
  {
    title: "text",
    description: "text",
  },
  {
    weights: {
      name: 5,
      description: 1,
    },
  }
);

module.exports = mongoose.model("Product", productSchema);
