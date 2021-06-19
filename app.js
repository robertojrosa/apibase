require("dotenv").config();
console.clear();
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// middleware
const validateCookie = require("./middlew/auth/validateCookie");
var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(validateCookie)
/// DB
const sequelize = require("./models/index");
sequelize
  .authenticate()
  .then(() => console.log("db conx"))
  .catch((err) => {
    console.log("err" + err);
  });

app.use("/auth", authRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter);
module.exports = app;
