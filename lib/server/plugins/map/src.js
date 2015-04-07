var gulp = require('gulp');

module.exports = mapSrcPlugin;

function mapSrcPlugin (data) {
    return gulp.src(data.src + 'map.json');
}