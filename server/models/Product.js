import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      min: 2,
      max: 60,
    },
    description: {
      type: String,
      required: true,
      min: 2,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    productType: {
      type: Array,
      default: [],
    },
    picturePath: {
      type: String,
      default: "",
    },
    discount: {
      type: Number,
      min: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
