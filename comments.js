// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');
var commentsPath = path.join(__dirname, 'comments.json');
var comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

// routes
app.get('/comments', function(req, res) {
  res.send(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  fs.writeFile(commentsPath, JSON.stringify(comments, null, 4), function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.send(comments);
});

// start server
app.listen(3000, function() {
  console.log('Server started on port 3000');
});