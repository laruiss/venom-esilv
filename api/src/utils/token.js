const jwt = require('jsonwebtoken')

const options = {
    expiresIn: '1h',
}

module.exports = {
  createToken (payload) {
      const secret = process.env.TOKEN_SECRET
      const token = jwt.sign(payload, secret, options)
      return token
  },

  checkToken (token) {
      const secret = process.env.TOKEN_SECRET
      return jwt.verify(token, secret)
  }
}