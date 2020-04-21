const express = require('express')

const router = express.Router()

router.get('/detail', (req, res) => {
  res.status(200).json({
    product: {
      id: 1,
      name: 'iPhone 8'
    }
  })
})

module.exports = router