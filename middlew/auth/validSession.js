const bcrypt = require("bcrypt");
module.exports = (req, res, next) => {
  if(req.cookieIsSet === true)
      next();
    else {
    res.status(400).json({ message: "login required" });
    return
  }
};
