const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    if (req.cookieIsSet === true)
      var userExists = await User.findOne({
        where: { id: req.userIdFromCookie },
      });
    else
      var userExists = await User.findOne({ where: { email: req.body.email } });

    if (!userExists) next();
    else {
      req.userExists = userExists;
      next();
    }
  } catch (err) {
    res.status(400).json({ userExistserror: err.message + err.name + err });
  }
};
