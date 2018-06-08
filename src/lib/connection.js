const mongoose = require('mongoose')
let db

module.exports = () => {
  if(!db) {
    db = mongoose.connect('mongodb://localhost/mongo-crud')
  }

  return db
}
