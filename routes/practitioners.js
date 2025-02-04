const express = require('express');
const router = express.Router();
const patientsController = require('../controllers/practitioners');

router.get('/', patientsController.getAll);
router.get('/:id', patientsController.getSingle);

module.exports = router;