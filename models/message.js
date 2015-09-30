var mongoose = require("mongoose");
var User = require("user");

var messageSchema = new mongoose.Schema({
  content: {type: String, require: true},
  author: [User.Schema]
  timestamp: {type: Date, default: Date.now()}
});

var Message = mongoose.model("Message", messageSchema);

module.exports = Message;