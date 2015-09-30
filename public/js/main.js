$(document).ready(function(){

  var socket = io("https://4df0949f.ngrok.io");

  socket.on("connect", function(){
    console.log("client side connected");
  })

  $("#text-box-form").on("submit", function(e){
    e.preventDefault();
    var message = $("#text-box")
    socket.emit("chats", message.val());
    message.val("");
  })

  socket.on("chats", function(message){
    console.log(message);
  })
  


})