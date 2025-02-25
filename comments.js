// Create web server
// create a route
// create a middleware
// use the middleware
// use the route
// get the comments from the file
// add comments to the file
// render the comments

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());

const commentsPath = path.join(__dirname, 'comments.json');

const getComments = () => {
  const comments = fs.readFileSync(commentsPath);
  return JSON.parse(comments);
};

const addComment = (comment) => {
  const comments = getComments();
  comments.push(comment);
  fs.writeFileSync(commentsPath, JSON.stringify(comments));
};

app.get('/comments', (req, res) => {
  const comments = getComments();
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  addComment(comment);
  res.send('Comment added');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});