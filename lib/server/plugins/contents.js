var through = require('through2');

module.exports = contentsPlugin;

function contentsPlugin (data) {
    var empty = true,
        errorFound = false;

    return through.obj(function (file, _, cb) {
        empty = false;

        if (data.error) {
            errorFound = true;
            cb(null, JSON.stringify({ error: data.error }));
        }

        if (!errorFound) {
            cb(null, file.contents);
        }
    }, function (cb) {
        if (empty) {
            this.push(JSON.stringify({ error: 'Content not found.' }));
        }

        cb();
    });
}