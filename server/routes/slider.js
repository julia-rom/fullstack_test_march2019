const express = require('express');
const router = express.Router();
const images = require('../image_exports');

// At root of sliderRoutes, send cat & shark photos
const sliderRoutes = () => {
    router.route('/').get(function (req, res) {
        res.json(images);
    });

    return router;
};

module.exports = sliderRoutes();