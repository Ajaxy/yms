var _ = require('lodash'),
    vow = require('vow'),
    gulp = require('gulp'),
    through = require('through2'),
    hashMap = require('../../util/hashMap');

module.exports = combineSrcPlugin;

function combineSrcPlugin (data) {
    var stream = through.obj(),
        query = data.req.query,
        aliases = splitAliases(query.load);

    hashMap(data.src).fromAliases(aliases)
        .then(function (hashes) {
            var glob = _.map(hashes, function (hash) {
                return data.src + hash[0] + '/' + hash[1] + '/' + hash;
            });

            // TODO Cache.
            gulp.src(glob).pipe(stream);
        })
        .fail(function (err) {
            console.error(err);
            stream.end();
        });

    return stream;
}

function splitAliases (loadString) {
    var aliases = [];

    for (var i = 0, l = loadString.length; i < l; i += 2) {
        aliases.push(loadString.substring(i, i + 2));
    }

    return aliases;
}