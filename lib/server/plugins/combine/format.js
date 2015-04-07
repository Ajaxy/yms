var path = require('path'),
    wrapper = require('gulp-wrapper'),
    concat = require('gulp-concat'),
    through = require('through2'),
    pipeChain = require('../util/pipeChain'),
    hashMap = require('../../util/hashMap');

module.exports = formatPlugin;

function formatPlugin (data) {
    var query = data.req.query,
        hashes = hashMap(data.src),
        supportNamespace = query.namespace ? ', ' + query.namespace.replace(/[^\w\$_]/gi, '') : '';

    return pipeChain(
        wrapper({
            header: 'function (ym' + supportNamespace + ') {\n',
            footer: '}'
        }),

        through.obj(function (file, _, cb) {
            var hash = path.basename(file.relative);

            hashes.toAliases([hash]).then(function (aliases) {
                var alias = aliases[0];

                file.contents = Buffer.concat([
                    new Buffer('[\'' + alias + '\', '),
                    file.contents,
                    new Buffer(']')
                ]);

                cb(null, file);
            }).fail(function (err) {
                console.error(err);
            });
        }),

        concat('#', { newLine: ',' }),

        wrapper({
            header: '[',
            footer: ', 0]' // TODO WAT!
        })
    )
}