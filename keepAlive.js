module.exports.keepAlive = function() {

  var http = require('http');
  var port = process.env.PORT || 8080;

  //Home page
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Hello World!");
  }).listen(port);

  //Keep alive
  setInterval(() => {
    http.get("http://bot-facebook-ls.herokuapp.com/");
  }, 1000 * 60 * 5);
}