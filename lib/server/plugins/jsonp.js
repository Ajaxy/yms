var wrapper = require('gulp-wrapper');

module.exports = jsonpPlugin;

function jsonpPlugin (data) {
    var query = data.req.query,
        name = query.callback || (query.callback_prefix + '_' + query.load);

    return wrapper({
        header: 'window[\''+ name + '\'](',
        footer: ');'
    });
}