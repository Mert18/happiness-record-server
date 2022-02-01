const express = require("express");
const router = express.Router();

// import controller
const { read, update } = require("../controllers/user.js");
const { requireSignin, adminMiddleware } = require("../controllers/auth");
const authorize = require("../middleware/authorize");

router.get("/user/:id", requireSignin, read);
router.put("/user/update", requireSignin, update);
router.put("/admin/update", requireSignin, adminMiddleware, update);

module.exports = router;
