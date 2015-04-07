var wrapper = require('gulp-wrapper');

module.exports = closurePlugin;

function closurePlugin () {
    return wrapper({
        header: '(function (global){',
        footer: '})(this);'
    });
}