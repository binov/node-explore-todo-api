var mongoose = require('mongoose')

// set the promise library to the built in one
mongoose.Promise = global.Promise
// No need to wait for callback.Mongoose manages it
mongoose.connect('mongodb://localhost:27017/TodoApp')

module.exports = {mongoose}
