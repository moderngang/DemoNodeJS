var express = require('express');
var router = express.Router();
var IndustrialProjectsController = require('../app/controllers/industrialProjectsController');

router.get('/', IndustrialProjectsController.getIndustrialProjects);

module.exports = router;