var userRouter = require('express').Router();
var userController = require('../../controllers/user/userController');

userRouter.route('/profile')
.get(userController);

module.exports = userRouter;
