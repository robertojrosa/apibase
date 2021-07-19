var express = require("express");
const userExists = require("../middlew/auth/userExists");
const passwordMatch = require("../middlew/auth/passwordMatch");
const validatePassword = require("../middlew/auth/validatePassword");
const createNewUser = require("../middlew/auth/createNewUser");
const updateUserSelf = require("../middlew/auth/updateUserSelf");
const loginUser = require("../middlew/auth/loginUser");
const validSession = require("../middlew/auth/validSession")
var router = express.Router();

/* serve login page */
router.get("/", function (req, res, next) {
  if(req.cookieIsSet === true)
  res.status(200).json({ message: "dashboarda as the cookie is valid" });
  else
  res.status(300).json({message: 'login required'});
});

/* login user form */
router.get("/login", function (req, res, next) {
  res.status(200).json({ message: "login form" });
});

/* login user */
router.post("/login", userExists, loginUser, function (req, res, next) {
  res.status(200).json({ message: "user + password match" });
});

/* end session. clear cookie*/
router.get("/logout", (req, res) => {
  res
    .clearCookie("access_token")
    .status(200)
    .json({ message: "quite la cookie" });
});

/* create new user */
router.post(
  "/register",
  userExists,
  passwordMatch,
  createNewUser,
  function (req, res) {
    res.status(201).json({ message: "new user added" });
  }
);
/* edit user */
router.post(
  "/updateSelf",
  validSession,
  userExists,
  validatePassword,
  updateUserSelf,
  function (req, res, next) {
    res.status(202).json({ message: `user edited` });
  }
);

module.exports = router;
