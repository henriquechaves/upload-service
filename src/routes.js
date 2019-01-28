const routes = require('express').Router();
const multer = require('multer');
const multerConfig = require('./config/multer')

routes.post('/posts', multer().single, (req, res) => {
    return res.json({

    });
});


module.exports = routes;