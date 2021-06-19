const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const { cookies } = req;
  if (typeof cookies.access_token === "undefined" || !cookies.access_token) {
    req.cookieIsSet = false;
    next();
  } else {
    var token = cookies.access_token.split(" ");

    jwt.verify(token[1], process.env.JWT_SECRET, function (err, decoded) {
      if (err) {
        console.log("error in cookie validation\n" + err);
      } else {
        req.cookieIsSet = true;
        req.userIdFromCookie = decoded.id;
        next();
      }
    });
  }
};
