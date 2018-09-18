const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router requires
const postsRoutes = require('./routes/posts.js');

// Users


// Posts
app.use('/users/:userId/posts', postsRoutes);

// Comments


// Messages


app.listen(3000, () => console.log('Started listening on port 3000!'));
