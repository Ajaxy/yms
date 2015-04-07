var path = require('path'),
    fs = require('vow-fs');

module.exports = server;

var rootPath = path.resolve(__dirname, '../../');

function server (dir) {
    dir = path.resolve(dir);

    fs.exists(dir + '/server.js').then(function (exists) {
        return exists ? dir + '/server.js' : rootPath + '/defaults/server.default.js';
    }).then(function (server) {
        process.chdir(dir);
        console.log('Working dir is ' + dir + '.');
        require(server);
    }).done();
}