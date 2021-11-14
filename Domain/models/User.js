const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String,
    salt: String,
    registeredDate: Date,
    lastLogon: Date
});

const User = mongoose.model("User", userSchema);
module.exports = User;