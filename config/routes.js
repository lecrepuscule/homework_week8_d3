var express = require("express");
var usersRouter = express.Router();
var chatsRouter = express.Router();

var passport = require("passport");
var bodyParser = require("body-parser");

var usersController = require("../controllers/users");
var chatsController = require("../controllers/channels");


function authenticatedUser(req, res, next){
  (req.isAuthenticated()) ? next() : res.redirect("/");
}

usersRouter.route('/')
  .get(staticsController.home);

usersRouter.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup)

usersRouter.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

usersRouter.route("/logout")
  .get(usersController.getLogout)

module.exports = usersRouter;
