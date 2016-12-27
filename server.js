var express = require('express');
var app = express();
var port = process.env.port || 3000;

// app.use(express.static(__dirname + '/public'));
// // console.log(__dirname);

app.get('/', function(req, res) {
  res.send('Todo API Root');
});

app.listen(port, function() {
  console.log('Express server started on ' + port + '!');
});
