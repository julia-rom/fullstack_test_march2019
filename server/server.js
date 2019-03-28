const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3002;

// Allow cross origin requests
app.use(cors());

// Allow body to be extracted from requests in JSON format
app.use(bodyParser.json());
app.use(express.static(__dirname + '/www'));

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

