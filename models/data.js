const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Data", dataSchema);
