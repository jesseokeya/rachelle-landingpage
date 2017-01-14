var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        layout: false
    });
});

router.get('/subscribe', function(req, res) {
    res.render('subscribe', {
        layout: false
    });
});


module.exports = router
