const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

//connect to db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected."))
  .catch((err) => console.log("DB Error."));

// import routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const dataRoutes = require("./routes/data");

// app middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

//middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", dataRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
