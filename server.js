var express = require('express');
var nunjucks  = require('nunjucks');
var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/', function(request, response) {
  response.render("index.html", {"foo":"bar"});
});

var server = app.listen(1759, function() {
  console.log('Please open http://%s:%s in a browser.', server.address().address, server.address().port)
});
