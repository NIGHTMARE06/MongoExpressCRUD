// Dependencies
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const router = require('./routes')

// Settings
app.set('port', process.env.port || 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
  extended: false
}))

// Routes
app.use('/', router)

// Listen
app.listen(app.get('port'), () => {
  console.log(`The server is running on port: ${app.get('port')}`)
})
