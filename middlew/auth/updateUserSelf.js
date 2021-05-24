const User = require("../../models/User");

module.exports = async (req, res, next) => {
  var existingUser = await User.findOne({where:{id : req.body.userIdFromCookie}})
  existingUser.firstName=req.body.firstName,
  existingUser.lastName=req.body.lastName,
  existingUser.email=req.body.email
  await existingUser.save()
  next();
};
