const express = require('express');
const router = express.Router();
const FavoriteController = require('../controllers/FavoriteController.js');

router.post("/", FavoriteController.addFavorite);

module.exports = router;