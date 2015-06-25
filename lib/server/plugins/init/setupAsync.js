var vow = require('vow'),
    _ = require('lodash'),
    through = require('through2');

module.exports = setupAsyncPlugin;

function setupAsyncPlugin (data) {
    var query = data.req.query,
        env = data.env;
    
    env.server = {
        url: data.req.protocol + '://' + data.req.headers.host,
        params: query
    };

    if (query.mode) {
        env.mode = query.mode;
        env.debug = env.mode && env.mode == 'debug';
    }

    return through.obj(function (file, encoding, cb) {
        vow.all(_.values(env)).then(function (results) {
            env = _.zipObject(_.keys(env), results);

            file.contents = new Buffer([
                file.contents.toString(),
                'setupAsync(' + JSON.stringify(env) + ');'
            ].join('\n'));

            cb(null, file);
        });
    });
}