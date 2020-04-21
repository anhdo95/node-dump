const express = require('express')
const jwt = require('jsonwebtoken')

const secret = require('../config/secret')

const router = express.Router()

router.post('/login', (req, res) => {
  const { username, password } = req.body

  if (username === "admin" && password === "admin123") {
    const token = jwt.sign({  username }, secret.JWT_PRIVATE_KEY, {
      expiresIn: '1h'
    })

    res.status(200).json({
      username, token
    })
  }
  
})

module.exports = router