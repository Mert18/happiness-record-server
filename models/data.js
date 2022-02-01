const mongoose = require("mongoose");
const moment = require("moment");

const dataSchema = new mongoose.Schema({
  owner_id: {
    type: String,
    required: true,
  },
  work: {
    type: Number,
    required: true,
  },
  leisure: {
    type: Number,
    required: true,
  },
  game: {
    type: Number,
    required: true,
  },
  happiness: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    default: moment().format("MMM Do YY"),
  },
});

module.exports = mongoose.model("Data", dataSchema);
