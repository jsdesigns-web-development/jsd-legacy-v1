var express = require('express');
var router = express.Router();

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.render('home');
});

router.get('/about', function(req, res) {
  res.render('about');
});

router.get('/about/resume', function(req, res) {
  res.render('resume');
});

router.get('/articles', function(req, res) {
  res.render('articles');
});

router.get('/blog', function(req, res) {
  res.redirect('/articles');
});

router.get('/projects', function(req, res) {
  res.render('projects');
});


module.exports = router;
