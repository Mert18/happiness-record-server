const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Successfully connected to database.");
    })
    .catch((err) => {
      console.log("database connection failed.");
      console.error(err);
      process.exit(1);
    });
};
