const mongoose = require("mongoose");
const app = require("./app");
const path = require("path");

require("dotenv").config({ path: path.resolve("..", "..", ".env") });

const PORT = process.env.PORT || 3000;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Database connected and server running. Use our API on port: ${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
