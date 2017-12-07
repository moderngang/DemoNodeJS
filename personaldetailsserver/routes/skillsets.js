var express = require('express');
var router = express.Router();
var SkillsetsController = require('../app/controllers/skillsetsController');

router.get('/', SkillsetsController.getSkillsets);

module.exports = router;