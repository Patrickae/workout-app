var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require("../model/user.js");


//---------add new user--------
router.post("/users", function(req, res) {
  //make a new instance of User with the req.body
  var name = req.body.name;
  var email = req.body.email;
  var username = req.body.username;
  var password = req.body.password;
  var password2 = req.body.password2;

  // Validation
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  var errors = req.validationErrors();

  if (errors) {
    res.redirect("/#/register")
    console.log(errors);
    return errors
  } else {
    var newUser = new User({
			name: name,
			email:email,
			username: username,
			password: password,
      workouts:[]
		});

		User.createUser(newUser, function(err, user){
			if(err) throw err;
			console.log(user);
		});
    req.flash('success_msg', 'You are registered and can now login');
		res.redirect('/#/');
  }

});

//------------passport local strategy------
passport.use(new LocalStrategy(function(username, password, done) {
  User.getUserByUsername(username, function(err, user) {
    if (err)
      throw err;
    if (!user) {
      return done(null, false, {message: 'Unknown User'});
    }

    User.comparePassword(password, user.password, function(err, isMatch) {
      if (err)
        throw err;
      if (isMatch) {
        return done(null, user);
        req.flash("user_flash", user);
        res.return(user);
      } else {
        return done(null, false, {message: 'Invalid password'});
      }
    });
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/#/home',
  failureRedirect: '/#/',
  failureFlash: true
}));

router.get('/logout', function(req, res){
	req.logout();

	req.flash('success_msg', 'You are logged out');

	res.redirect('/users/login');
});


module.exports = router;