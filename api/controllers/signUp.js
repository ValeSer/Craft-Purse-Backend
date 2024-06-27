const User = require('../models/user')
const bcrypt = require("bcryptjs")


const SignUpController = {
  SignUp: async (req, res) => {
    try {
    const user = new User()
    user.username = req.body.username
    user.password = await encryptPassword(req.body.password)
    await user.save()
      res.sendStatus(201)
    } catch(e) {
      console.log(e)
      res.sendStatus(400)
    }
  }
}
const encryptPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

module.exports = SignUpController;