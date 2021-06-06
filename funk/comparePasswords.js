const bcrypt = require("bcrypt");

function passwordMatch(incoming, hashed) {
  return new Promise(function(resolve, reject) {
      bcrypt.compare(incoming, hashed, function(err, res) {
          if (err) {
               reject(err);
          } else {
               resolve(res);
          }
      });
  });
}

module.exports = passwordMatch
