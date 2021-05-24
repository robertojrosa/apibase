const bcrypt = require("bcrypt");
module.exports = (req, res, next) => {
  if (req.body.password === req.body.passwordConfirm) {
    let passw = req.body.password
    bcrypt.hash(passw, 5,  function (err, hash) {
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
