const bcrypt = require("bcrypt");
module.exports = (req, res, next) => {
  if (req.body.newpassword === req.body.passwordConfirm) {
    bcrypt.hash(req.body.newpassword, 5,  function (err, hash) {
      if (err) {
        console.log(err);
        return;
      }
      req.body.hashedPassword = hash;
      next();
    });
  } else {
    res.status(400).json({ message: "passwords do not match" });
    return;
  }
};
