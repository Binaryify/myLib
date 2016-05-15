var express = require('express');
var app = express();
app.get('/', function(req, res){
  res.send('Hello World');
});
app.get('/about', function(req, res){
  // res.send('about');
   res.sendfile('./views/index.html');
});
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
