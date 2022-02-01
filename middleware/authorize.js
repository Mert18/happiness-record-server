const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  const token = req.header("token");
  if (!token) {
    return res.status(403).json({ msg: "authorization denied" });
  }
  // Verify token
  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verify._id;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
