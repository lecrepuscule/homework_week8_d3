var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/user");

module.exports = function(passport){
  passport.serializeUser(function(user, callback){
    callback(null, user.id);
  });

  passport.deserializeUser(function(id, callback){
    User.findById(id, function(err, user){
      callback(err, user);
    });
  });

  passport.use("local-signup", new LocalStrategy({
    usernameField: "name",
    passwordField: "password",
    passReqToCallback: true
  }, function(req, name, password, callback){
    process.nextTick(function(){
      User.findOne({"local.name": name}, function(err, user){
        if (err) return callback(err);
        if (user) {
          return callback(null, false, req.flash("SignupMessage", "This name has already been used"));
        } else {
          var newUser            = new User();
          newUser.local.name    = name;
          newUser.local.password = newUser.encrypt(password);

          newUser.save(function(err) {
            if (err) throw err;
            return callback(null, newUser);
          });
        };
      });
    });
  }));

  passport.use("local-login", new LocalStrategy({
    usernameField : 'name',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, name, password, callback){
    User.findOnd({"local.name": name}, function(err, user){
      if (err) return callback(err);
      if (!user || !user.validPassword(password)) {
        return callback(null, false, req.flash('loginMessage', 'Incorrect cred.'))
      } else {
        return callback(null, user);
      };
    });
  }));
};

