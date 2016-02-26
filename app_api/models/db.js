var mongoose = require('mongoose');
require('./railFailure');

var dbURL = 'mongodb://localhost/RailwayModelsData';
mongoose.connect(dbURL);

var readLine = require("readline");
if (process.platform === "win32") {
    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on("SIGINT", function () {
        process.emit("SIGINT");
    });
}

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to' + dbURL);
});
mongoose.connection.on('error', function (err) {
    console.log('mongoose connected to' + err);
});
mongoose.connection.on('disconnected', function (err) {
    console.log('Disconnected');
});

var gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
//for nodemon restart
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
// For app termination
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});
// For Heroku app termination
process.on('SIGTERM', function () {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});
// JavaScript source code
