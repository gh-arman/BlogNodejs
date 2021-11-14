var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

router.get('/get', userController.user_list);
router.post('/createUser', userController.create_user);
router.post('/updateuser', userController.update_user)

module.exports = router;