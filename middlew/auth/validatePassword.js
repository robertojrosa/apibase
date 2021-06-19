const bcrypt = require("bcrypt");

module.exports = async (req, res, next) => {
  console.log(req.userExists.password);
  try{
     let validPassword = await bcrypt.compare(req.body.password, req.userExists.password);
     console.log('valid password' + validPassword)
     next()
  }
  catch(err) {
    res.status(400).json('password missmatch')
    return
  }
}
