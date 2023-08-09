const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  editing: {
    type: Boolean,
    default: false,
    required: true
  },
  checked: {
    type: Boolean,
    default: false,
    required: true
  }
});

module.exports = mongoose.model('Todo', TodoSchema);