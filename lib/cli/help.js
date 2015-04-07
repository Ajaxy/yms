var packageInfo = require('../../package.json');

module.exports = help;

function help () {
    console.log([
        packageInfo.name + ' ' + packageInfo.version,
        packageInfo.description,
        'COMING SOON'
    ].join('\n'));
}