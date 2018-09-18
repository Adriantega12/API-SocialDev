const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router requires
const commentsRoutes = require('./routes/comments.js');

// USERS


// PUBLICATIONS


// COMMENTS
app.use('/users/:userId/posts/:postId', commentsRoutes);

// User and Comments
// INDEX
app.get('/users/:userId/comments', (req, res) => {
	res.send('INDEX');
});


// MESSAGES


app.listen(3000, () => console.log('Started listening on port 3000!'));
