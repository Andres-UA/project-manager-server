const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
  name: String,
  description: String,
  priority: Number,
});

module.exports = mongoose.model('Task', Task);
