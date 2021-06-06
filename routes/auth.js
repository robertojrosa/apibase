var express = require("express");
const userExists = require("../middlew/auth/userExists");
const passwordMatch = require("../middlew/auth/passwordMatch");
const createNewUser = require("../middlew/auth/createNewUser");
const updateUserSelf = require("../middlew/auth/updateUserSelf");
const loginUser = require("../middlew/auth/loginUser");
const validateCookie = require("../middlew/auth/validateCookie");
var router = express.Router();

/* serve login page */
router.get("/", validateCookie, function (req, res, next) {
  res.status(200).json({ message: "dashboar as the cookie is valid" });
});
/* login user form */
router.get("/login", function (req, res, next) {
  res.status(200).json({ message: "login form" });
});
/* login user */
router.post("/login", loginUser, function (req, res, next) {
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
  "/update",
  validateCookie,
  updateUserSelf,
  function (req, res, next) {
    res.status(202).json({ message: `user edited` });
  }
);

module.exports = router;
