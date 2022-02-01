const express = require("express");
const router = express.Router();
const authorize = require("../middleware/authorize");

const {
  getMyData,
  postMyData,
  getRandomUserData,
  getRandomUser,
  getUserData,
} = require("../controllers/data.js");

router.get("/getmydata", authorize, getMyData);
router.post("/postmydata", authorize, postMyData);
router.get("/getrandomuserdata", getRandomUserData);
router.get("/randomuser", getRandomUser);
router.get("/userdata/:id", getUserData);

// router.get("/getthisuserdata/:id", getThisUserData);

module.exports = router;
