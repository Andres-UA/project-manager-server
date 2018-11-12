const mongoose = require('mongoose');
const { Schema } = mongoose;

const Task = mongoose.model('Task');

const Project = new Schema({
  name: String,
  description: String,
  responsible: String,
  start_date: Date,
  end_date: Date,
  state: String,
  tasks: [Task.schema],
  user_id: String,
});

module.exports = mongoose.model('Project', Project);
