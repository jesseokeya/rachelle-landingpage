var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/subscribe', function(req, res) {
    res.render('subscribe');
});


module.exports = router
