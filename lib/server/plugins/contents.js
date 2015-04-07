var through = require('through2');

module.exports = contentsPlugin;

function contentsPlugin () {
    var empty = true;

    return through.obj(function (file, _, cb) {
        empty = false;
        cb(null, file.contents);
    }, function (cb) {
        if (empty) {
            this.push(JSON.stringify({ error: 'Content not found.' }));
        }

        cb();
    });
}