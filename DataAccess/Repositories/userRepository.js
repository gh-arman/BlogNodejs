var mongoose = require('mongoose');
var User = require('../../Domain/models/User');
//var db = require('../../API/db')
var securityService = require('./Services/security');

//======================Create User==============================
const create_user = async function (user) {

    const newUser = new User({ ...user });
    newUser.salt = securityService.generateSalt();
    newUser.registeredDate = Date.now();

    await newUser.save();

    return newUser;
}

exports.create_user = create_user;
//===============================================================

//======================Get Users================================
const get_users = async function () {

    var users = await User.find();
    return users;
}
exports.get_users = get_users;

const update_user = async function(user) {
    const updatedUser = new User({...user});
    await updatedUser.update();

    return updatedUser;
}
exports.update_user = update_user;
//===============================================================