const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router requires
const postsRoutes = require('./routes/posts.js');
const commentsRoutes = require('./routes/comments.js');

// Users


// Posts
app.use('/users/:userId/posts', postsRoutes);


// Comments
app.use('/users/:userId/posts/:postId', commentsRoutes);


// User and Comments
// INDEX
app.get('/users/:userId/comments', (req, res) => {
	res.send('INDEX');
});

// Messages


app.listen(3000, () => console.log('Started listening on port 3000!'));
