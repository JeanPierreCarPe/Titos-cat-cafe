import mongoose from "mongoose";

const catSchema = new mongoose.Schema(
  {
    pictureUrl: mongoose.SchemaTypes.String,
    name: {
      type: String,
      required: true,
      min: 2,
      max: 30,
    },
    age: {
      type: Number,
      min: 0,
    },
    gender: String,
    personality: String,
    description: String,
  },
  { timestamps: true }
);

const Cat = new mongoose.model("Cats", catSchema);

export default Cat;
