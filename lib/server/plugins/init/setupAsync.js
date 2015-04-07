var footer = require('gulp-footer');

module.exports = setupAsyncPlugin;

function setupAsyncPlugin (data) {
    var query = data.req.query,
        env = {};
    
    env.server = {
        url: data.req.protocol + '://' + data.req.headers.host,
        params: query
    };

    if (query.mode) {
        env.mode = query.mode;
        env.debug = env.mode && env.mode == 'debug';
    }

    return footer('setupAsync(' + JSON.stringify(env) + ');');
}