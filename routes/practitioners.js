const express = require('express');
const router = express.Router();
const practitionersController = require('../controllers/practitioners');

router.get('/', practitionersController.getAll);
router.get('/:id', practitionersController.getSingle);

module.exports = router;