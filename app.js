const express = require('express');
const router = require('./routes');

const app = express();
/*
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router requires
const postsRoutes = require('./routes/posts.js');
const messagesRoutes = require('./routes/messages.js');
*/

// Users


// Posts
app.use('/users/:userId/posts', postsRoutes);

// Comments


// Messages
app.use('/users/:userId/messages', commentsRoutes);


app.listen(3000, () => console.log('Started listening on port 3000!'));
