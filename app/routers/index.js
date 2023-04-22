const express = require('express');
const mainController = require('../controllers/mainController');
const cadexController = require('../controllers/cadexController');

const router = express.Router();

router.get('/', mainController.getHomePage);
router.get('/cadex', cadexController.getCadex);
module.exports = router;
