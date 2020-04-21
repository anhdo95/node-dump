const jwt = require('jsonwebtoken')
const secret = require('../config/secret')

module.exports = function(req, res, next) {
  const error = new Error('Not authorized!')
  error.statusCode = 401

  if ((req.get('Authorization'))) {
    const [_, token] = req.get('Authorization').split(' ')

    try {
      const decodedToken = jwt.verify(token, secret.JWT_PRIVATE_KEY)

      if (decodedToken) {
        req.username = decodedToken.username
        next()
      }  
    } catch {
      throw error
    }
  }

  throw error
}