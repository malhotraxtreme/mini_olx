const router = require('express').Router();
var homeController = require('../controllers/homeController');

router.get('/', homeController.renderHomeView);

module.exports = router;
