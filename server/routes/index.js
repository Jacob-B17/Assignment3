var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
});
/* GET contactus page. */
router.get('/contactus', function(req, res, next) {
  res.render('contact', { title: 'Contact Us' });
});

module.exports = router;
