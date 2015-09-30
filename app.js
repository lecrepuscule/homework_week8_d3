var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var server = require("http").createServer(app);
var io = require("socket.io")(server);

var morgan = require("morgan");

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(req, res){
  res.render("chat.ejs");
})

server.listen(port, function(){
  console.log("start listening on port %s", port);
})

io.on("connect", function(socket){
  console.log("server side connected");
  socket.on("chats", function(message){
    console.log("received message: %s", message)
    io.emit("chats", message);
  })
  socket.emit("chats", "this is from socket");
  io.emit("chats", "this is from io");
})

