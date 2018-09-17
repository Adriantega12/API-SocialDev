const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// USERS


// PUBLICATIONS


// COMMENTS


// MESSAGES


app.listen(3000, () => console.log('Started listening on port 3000!'));
