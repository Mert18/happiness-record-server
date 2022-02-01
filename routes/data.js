const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");

const {
  getMyData,
  postMyData,
  getRandomUserData,
  getRandomUser,
  getUserData,
  getMyProfile,
} = require("../controllers/data.js");

router.get("/getmydata", authorize, getMyData);
router.get("/profile", authorize, getMyProfile);
router.post("/postmydata", authorize, postMyData);
router.get("/getrandomuserdata", getRandomUserData);
router.get("/userdata/:id", getUserData);

router.get("/randomuser", getRandomUser);
module.exports = router;
