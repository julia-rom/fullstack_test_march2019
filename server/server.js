const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const router = express.Router();
const PORT = 3002;

// This let's us pass the router to the function, and apply routes to it
const sliderRoutes = require('./routes/slider');

// Allow cross origin requests
app.use(cors());

// Allow body to be extracted from requests in JSON format
app.use(bodyParser.json());
app.use(express.static(__dirname + '/www'));

// Prefix all api requests with /api, and apply to router
app.use("/api", router);
// At router level, any thing with /slider should go to api/slider
router.use("/slider", sliderRoutes);

app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

