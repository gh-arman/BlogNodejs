
exports.generateSalt = function() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * 10));
    }
    return result;
}