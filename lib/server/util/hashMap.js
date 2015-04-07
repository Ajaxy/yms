var _ = require('lodash'),
    vow = require('vow'),
    fs = require('vow-fs');

module.exports = scope;

function scope (dir) {
    var hashes = null,
        hashesInverse;

    function fromAliases (aliases) {
        return getHashes().then(function (hashes) {
            return _.map(aliases, function (alias) { return hashes[alias]; });
        });
    }

    function toAliases (hashes) {
        return getHashesInverse().then(function (hashesInverse) {
            return _.map(hashes, function (hash) { return hashesInverse[hash]; });
        });
    }

    function getHashes () {
        return hashes ? vow.resolve(hashes) : loadHashes();
    }

    function loadHashes () {
        // TODO Cache in Redis.
        return fs.read(dir + 'hashes.json').then(function (contents) {
            return hashes = JSON.parse(contents);
        });
    }

    function getHashesInverse () {
        return hashesInverse ? vow.resolve(hashesInverse) : invertHashes();
    }

    function invertHashes () {
        return getHashes().then(function (hashes) {
            return hashesInverse = _.invert(hashes);
        });
    }

    return {
        fromAliases: fromAliases,
        toAliases: toAliases
    };
}
