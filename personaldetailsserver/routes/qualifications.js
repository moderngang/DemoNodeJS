var express = require('express');
var router = express.Router();
var QualificationsController = require('../app/controllers/qualificationsController');

router.get('/', QualificationsController.getQualifications);

module.exports = router;