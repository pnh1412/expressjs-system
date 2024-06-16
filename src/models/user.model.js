const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
  },
  created_by: {
    type: Date,
    default: Date.now
  },
  updated_by: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('user', schema);