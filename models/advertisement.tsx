import { Schema, model, models } from "mongoose";

const AdSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  title: {
    type: String,
    required: [true, "Title is required!"],
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
  },
  brand: {
    type: String,
    required: [true, "Brand is required!"],
  },
  year: {
    type: Number,
    required: [true, "Year is required!"],
  },
  description: {
    type: String,
    required: [true, "Description is required!"],
  },
});

const Advertisement = models.Advertisement || model("advertisement", AdSchema);

export default Advertisement;
