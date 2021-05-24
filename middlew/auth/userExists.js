const User = require('../../models/User')

module.exports = async (req, res, next) => {
  try {
    var userExists = await User.findOne({ where: { email: req.body.email } });
    if (!userExists) next();
    else {
      res.status(200).json({ message: "userExists" });
      return
    }
  } catch (err) {
    res.status(400).json({userExistserror: err.message + err.name  });
  }
};