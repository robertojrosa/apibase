const User = require("../../models/User");

module.exports = async (req, res, next) => {
  try {
    var createdUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.hashedPassword,
      status: 1,
    });
  } catch (err) {
    console.log(err);
    res.status(406).json({ message: "we could not create the new record" });
    return;
  }
  console.log(createdUser.id);
  next();
};
