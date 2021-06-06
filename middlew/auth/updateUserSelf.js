const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    var existingUser = await User.findOne({
      where: { id: req.body.userIdFromCookie },
    });
    (existingUser.firstName = req.body.firstName),
      (existingUser.lastName = req.body.lastName);
      if(req.body.newPassword != NaN)
        console.log(req.body.newPassword);
        else
        console.log(req.body.newPassword);
    await existingUser.save();
    next();
  } catch (err) {
    res.status(400).json({ message: "unable to update" });
  }
};
