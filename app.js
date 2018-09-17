const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router requires
const messagesRoutes = require('./routes/messages.js');

// USERS


// PUBLICATIONS


// COMMENTS


// MESSAGES
app.use('/users/:userId/messages', commentsRoutes);


app.listen(3000, () => console.log('Started listening on port 3000!'));
