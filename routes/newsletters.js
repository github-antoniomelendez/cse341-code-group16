const express = require('express');
const router = express.Router();
const newslettersController = require('../controllers/newsletters');

router.get('/', newslettersController.getAll);
router.get('/:id', newslettersController.getSingle);

module.exports = router;