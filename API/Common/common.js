exports.logError = function(title, body) {
    console.log('==================');
    console.log(`ERROR-> ${title}, ${body}`);
    console.log('==================');
};

exports.logInfo = function(title) {
    console.log('==================');
    console.log(`INFO-> ${title}`);
    console.log('==================');
};