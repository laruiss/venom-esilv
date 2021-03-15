import jwt from 'jsonwebtoken'

const options = {
  expiresIn: '1h'
}

export function createToken (payload) {
  const secret = process.env.TOKEN_SECRET
  const token = jwt.sign(payload, secret, options)
  return token
}

export function checkToken (token) {
  const secret = process.env.TOKEN_SECRET
  return jwt.verify(token, secret)
}
