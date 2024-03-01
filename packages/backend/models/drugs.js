import { model } from "mongoose";

const Drug = model("Drug", {
  name: String,
  price: Number,
  category: String,
  image: String,
  shops: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shop",
    },
  ],
});
