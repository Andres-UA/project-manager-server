const express = require('express');
const router = express.Router();

const ProjectController = require('../controllers/ProjectController');

const jwtHelper = require('../config/jwtHelper');

router.get('/', jwtHelper.verifyJwtToken, ProjectController.index);
router.post('/', jwtHelper.verifyJwtToken, ProjectController.store);
router.get('/:id', jwtHelper.verifyJwtToken, ProjectController.show);
router.put('/:id/tasks', jwtHelper.verifyJwtToken, ProjectController.addTask);
router.put('/:id', jwtHelper.verifyJwtToken, ProjectController.update);
router.delete('/:id', jwtHelper.verifyJwtToken, ProjectController.destroy);

module.exports = router;
