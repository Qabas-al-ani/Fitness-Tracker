const router = require('express').Router();
const homeRoutes = require('./html.js');


router.use('/', homeRoutes);


module.exports = router;
