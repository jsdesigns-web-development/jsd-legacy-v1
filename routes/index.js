var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  // res.render('landing');
  res.render('home');
});

router.get('/home', function(req, res) {
  res.render('home');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/pricing', function(req, res) {
  res.render('pricing');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

router.get('/blog', function(req, res) {
  res.redirect('/blog');
});

router.get('/portfolio', function(req, res) {
  res.render('portfolio');
});

router.get('/web-design-services', function(req, res) {
  res.render('services');
});

router.get('/configure-dns', function(req, res) {
  res.render('configure-dns-howto');
});


module.exports = router;
