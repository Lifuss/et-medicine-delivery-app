const Shop = model("Shop", {
  name: String,
  location: String,
  image: String,
  drugs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Drug",
    },
  ],
});
