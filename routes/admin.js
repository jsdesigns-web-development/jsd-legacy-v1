var express = require('express');
var passport = require('passport');
var router = express.Router();

//var bodyParser = require("body-parser");


//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// Define the home page route
router.get('/', function(req, res) {
  console.log('Authenticated: ' + req.isAuthenticated());
  if (req.isAuthenticated()) {
    res.redirect('/admin/panel');
  } else {
    res.redirect('/admin/login');
  }
});

router.get("/logout", function(req, res){
  console.log('logging out of admin panel ...');
  req.logout();
  res.redirect("/");
});

router.get('/login', function(req, res) {
  res.render('admin_login');
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect: '/admin/panel',
  failureRedirect: '/login',
  failureFlash: true
}));

router.get('/newUser', function(req, res) {
  res.render('admin_new_user');
});

router.post('/newUser', function(req, res) {
  res.send('admin_new_user_post');
});

router.get('/panel', function(req, res) {
  console.log('Authenticated: ' + req.isAuthenticated());
  res.render('admin_panel');
});

router.get('/articles', function(req, res) {
  res.render('admin_articles');
});

router.get('/articles/new', function(req, res) {
  res.render('admin_new_article');
});

module.exports = router;
