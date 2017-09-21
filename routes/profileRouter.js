const router = require('express').Router();
var profileController = require('../controllers/profileController');

router.get('/',profileController.renderProfileView);

module.exports = router;
