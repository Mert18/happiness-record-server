const Data = require("../models/data");

exports.getMyData = async (req, res) => {
  try {
    const data = await Data.find({ owner_id: req.user });
    await res.json(data);
  } catch (error) {
    console.log("Error getting your data", error);
  }
};

exports.postMyData = async (req, res) => {
  try {
    const { happiness, work, leisure, game } = req.body;
    const newData = await new Data({
      owner_id: req.user,
      happiness,
      work,
      leisure,
      game,
    });

    await newData.save((err, newData) => {
      if (err) {
        console.log("Save data in database error", err);
        return res.status(401).json({
          error: "Error saving data in database. Try sign up again.",
        });
      }
      return res.json({
        newData,
        message: "Data sent.",
      });
    });
  } catch (error) {
    console.log("error creating your data document", error);
  }
};
