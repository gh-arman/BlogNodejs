var express = require('express');
var router = express.Router();

var postController = require('../controllers/postController');

router.get('/get', postController.post_list);

module.exports = router;