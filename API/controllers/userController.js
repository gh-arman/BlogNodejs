var userRepository = require('../../DataAccess/Repositories/userRepository');

exports.user_list = async function(req, res) {
    var result = await userRepository.get_users();
    res.send(result);
};

exports.create_user = async function(req, res) {
    var result = await userRepository.create_user(req.body);
    res.send(result);
}

exports.update_user = async function(req, res) {
    var result = await userRepository.update_user(req.body);
    res.send(result);
}