const Data = require("../models/data");
const User = require("../models/user");

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

exports.getRandomUserData = async (req, res) => {
  try {
    const user = await User.aggregate([{ $sample: { size: 1 } }]);
    const data = await Data.find({ owner_id: user[0]._id });
    const returnedData = [user[0].username, data];
    res.json(returnedData);
  } catch (error) {
    console.log("Get random user data error", error);
  }
};
