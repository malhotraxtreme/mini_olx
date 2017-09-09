var userRouter = require('express').Router();
var userController = require('../controllers/userController');

userRouter.route('/profile')
.get(userController);

module.exports = userRouter;
