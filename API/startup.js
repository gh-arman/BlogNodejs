const express = require('express');
const config = require('./Common/default.json');
const router = require('./routes/index');
const db = require('./db');
const common = require('./Common/common');

var app;

exports.initExpress = function () {
    app = express();
    app.use(express.json());
    common.logInfo('Express initiated.');
}

exports.initRoutes = function () {
    for (let route of router.routes)
        app.use(route.routeName, route.route);

        common.logInfo('Routes initiated.');
}

exports.initDatabase = async function() {
    var dbConnectionResult = await db.connectDB();
    

    if(dbConnectionResult.successful)
        common.logInfo('Database initiated.');
    
    else
    {
        console.log("asdasdasd" , dbConnectionResult.successful);
        common.logError('Database Connection Failed. ', dbConnectionResult.body);
    }
}

exports.runApp = function () {
    app.listen(config.serverPort, () => common.logInfo('Service is up.'));
}