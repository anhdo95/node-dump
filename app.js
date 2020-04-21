const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const productRoutes = require('./routes/product')
const authRoutes = require('./routes/auth')
const isAuth = require('./middlewares/is-auth')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use('/auth', authRoutes)
app.use('/products', isAuth, productRoutes)
app.use((error, req, res, next) => {
  if (error) {
    return res.status(error.statusCode || 500).json({
      status: 'error',
      message: error.message
    })
  }

  next()
})

app.listen(8000)

