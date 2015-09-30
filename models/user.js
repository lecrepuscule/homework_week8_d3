var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");

var userSchema = new mongoose.Schema({
  local: {
    name: {type: String, require: true, unique: true},
    password: {type: String, require: true}
  }
})

userSchema.methods.encrypt = function(password){
  return bcrypt.hash(password, bcrypt.genSalt(), null);
}

userSchema.methods.validPassword = function(password){
  return bcrypt.compare(password, this.local.password);
}

var User = mongoose.model("User", userSchema);

module.exports = User;