const User = require('../models/user')

const SignUpController = {
  SignUp: (req, res) => {
    const user = new User()
    user.username = req.body.username
    user.password = req.body.password
    user.save().then(() => {
      res.sendStatus(201)
    })
    .catch(e => {
      console.log(e)
      res.sendStatus(400)
    })
  }
}

module.exports = SignUpController;