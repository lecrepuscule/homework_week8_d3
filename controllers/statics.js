function home(req, res) {  
  res.render('chat.ejs');
}

module.exports = {
  home: home,
}