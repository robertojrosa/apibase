const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
console.log(req.userExists);
  try {
    if (!req.userExists) {
      res.status(200).json({ message: "no valid user" });
      return;
    } else {
      jwt.sign(
        { id: req.userExists.id },
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
                maxAge: 10 * 60000,
                httpOnly: true,
              })
              .json({ message: "cookie set, user logged in" });
          }
        }
      );
    }
  } catch (err) {
    res.status(400).json({ ERRORSOTE: err.message + err.name });
  }
};
