const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello World') });

router.use('/patients', require('./patients'));
router.use('/comments', require('./comments'));
router.use('/practitioners', require('./practitioners'));
router.use('/newsletters', require('./newsletters'));

module.exports = router;