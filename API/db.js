const mongoose = require('mongoose');
const config = require('./Common/default.json');
const db = config.mongoURI;

var client;

const connectDB = async function() {
    try {
        var result = await mongoose.connect(
            db,
            {
                useNewUrlParser: true
            },
        );
        client = result.connection;
        return {
            successful: true,
            body: ''
        };
    } catch (err) {
        return {
            successful: false,
            body: err
        }
    }
};

const getContext = function() {
    //console.log("sdfasdfasdf", context);
    return client.db;
}


module.exports =  { connectDB, getContext };
//module.exports = { context };