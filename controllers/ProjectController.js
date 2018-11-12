const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Project = mongoose.model('Project');
const Task = mongoose.model('Task');

module.exports.index = async (req, res) => {
  const projects = await Project.find({ user_id: req._id});
  res.status(200).send({
    status: true,
    projects: projects,
  });
};

module.exports.show = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.status(200).send({
    status: true,
    project: project,
  });
};

module.exports.store = async (req, res, next) => {
  var project = new Project();

  project.name = req.body.name;
  project.description = req.body.description;
  project.responsible = req.body.responsible;
  project.start_date = req.body.start_date;
  project.end_date = req.body.end_date;
  project.state = req.body.state;
  project.user_id = req._id;

  project.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      if (err.code == 11000) res.status(422).send(['Duplicate email adrress found.']);
      else return next(err);
    }
  });
};

module.exports.addTask = async (req, res, next) => {

  var task = new Task();

  task.name = req.body.name;
  task.description = req.body.description;
  task.priority = req.body.priority;

  await Project.findByIdAndUpdate(req.params.id, { $push: { tasks: task } });

  res.json({
    status: 'Project Updated',
    task: task,
  });

};

module.exports.update = async (req, res) => {
  await Project.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: 'Project Updated',
  });
};

module.exports.destroy = async (req, res) => {
  await Project.findByIdAndRemove(req.params.taskId);
  res.json({
    status: 'Project deleted',
  });
};
