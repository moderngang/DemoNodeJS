var express = require('express');
var router = express.Router();
var AcademicProjectsController = require('../app/controllers/academicProjectsController');

router.get('/', AcademicProjectsController.getAcademicProjects);

module.exports = router;