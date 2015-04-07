var packageInfo = require('../../package.json');

module.exports = help;

function help () {
    console.log([
        packageInfo.name + ' ' + packageInfo.version,
        packageInfo.description,
        '',
        'Usage:',
        '\tyms [server] [DIR=.] [-p <port>]\t# Starts `yms` server.',
        '\tyms configure [DIR=.] [-f]\t\t# Makes a copy of default `server.js` in specified directory.',
        '\tymb help\t\t\t\t# Displays this message.'
    ].join('\n'));
}