const router = require('express').Router();
var homeController = require('../controllers/homeController');

router.get('/', homeController.renderHomeView)
.get('/contact', homeController.renderContactView)
.get('/about', homeController.renderAboutView)
.get('/howitworks', homeController.renderHowView)
.post('/login',homeController.login)
.post('/register',homeController.register);

module.exports = router;
