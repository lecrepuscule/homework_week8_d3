var passport = require("passport");

function getSignup(req, res){
  res.render("signup.ejs", message: req.flash("signupMessage"));
};

function postSignup(req, res){
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true
  })(req, res);
};

function getLogin(req, res) { 
  res.render('login.ejs', { message: req.flash('loginMessage') });
};

function postLogin(req, res) {
  passport.authenticate('local-login', {
    successRedirect : "/",
    failureRedirect : "/login",
    failureFlash    : true
  })(req, res);
};

function getLogout(req, res) {
  req.logout();
  res.redirect("/");
}

module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout
}