const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const { cookies } = req;
  if (typeof cookies.access_token === "undefined" || !cookies.access_token) {
    res.status(401).redirect("login/");
    return;
  } else var token = cookies.access_token.split(" ");

  jwt.verify(token[1], process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      res.status(401).redirect("login/");
      return;
    } else {
      req.body.userIdFromCookie = decoded.id
      console.log(decoded.id);
      next();
    }
  });
};
