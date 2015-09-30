$(document).ready(function(){

  var socket = io("https://4df0949f.ngrok.io");
  socket.on("connect", function(){
    console.log("client side connected");
  })
})