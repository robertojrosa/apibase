const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passwordMatch = require("../../funk/passwordMatch");

module.exports = async (req, res, next) => {
  try {
    var userExists = await User.findOne({ where: { email: req.body.email } });
    if (!userExists) {
      res.status(200).json({ message: "no valid user" });
      return;
    } else {
      if (await passwordMatch(req.body.password, userExists.password)) {
        jwt.sign(
          { id: userExists.id },
          process.env.JWT_SECRET,
          function (err, token) {
            if (err) {
              console.log(err);
              res.status(500).json({
                message: "we suffered an internal error during authentication",
              });
              return;
            } else {
              res
                .status(200)
                .cookie("access_token", "Bearer: " + token, {
                  maxAge: 10*60000,
                  httpOnly: true,
                })
                .json({message: 'cookie set, user logged in'});
            }
          }
        );
      } else
        res.status(302).json({ message: "no match for user and password" });
      return;
    }
  } catch (err) {
    res.status(400).json({ ERRORSOTE: err.message + err.name });
  }
};
