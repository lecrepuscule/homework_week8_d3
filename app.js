var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res){
  res.render("chat.ejs");
})

app.listen(port, function(){
  console.log("start listening on port %s", port);
})