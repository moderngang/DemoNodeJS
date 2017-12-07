var express = require('express');
var router = express.Router();
var personaldetailscontroller = require('../app/controllers/personalDetailsController');

router.get('/', personaldetailscontroller.getDetails);

module.exports = router;