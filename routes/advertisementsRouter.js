const router = require('express').Router();
var advertisementsController = require('../controllers/advertisementsController');

router.get('/',advertisementsController.renderAdsView);

module.exports = router;
