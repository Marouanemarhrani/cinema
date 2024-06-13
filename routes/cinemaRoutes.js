const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/cinemaController.js');

router.post('/', cinemaController.createCinema);
router.get('/', cinemaController.getAllCinemas);
router.get('/:id', cinemaController.getCinemaById);
router.put('/:id', cinemaController.updateCinema);
router.delete('/:id', cinemaController.deleteCinema);

module.exports = router;