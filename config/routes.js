var express = require("express");
var usersRouter = express.Router();
var chatsRouter = express.Router();

var usersController = require("../controllers/users");
var chatsController = require("../controllers/channels");


chatsRouter.route("/channels")
