var mongoose = require('mongoose')
const connection = require('../lib/connection')

module.exports = () => {
  var db = connection()
  var schema = mongoose.Schema

  var Task = schema({
    text: String,
    done: Boolean
  })

  return mongoose.model('tasks', Task)
}
