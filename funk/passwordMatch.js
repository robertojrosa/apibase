const bcrypt = require("bcrypt");

function passwordMatch(param1, param2) {
  return new Promise(function(resolve, reject) {
      bcrypt.compare(param1, param2, function(err, res) {
          if (err) {
               reject(err);
          } else {
               resolve(res);
          }
      });
  });
}

module.exports = passwordMatch
