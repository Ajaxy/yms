var gulp = require('gulp');

module.exports = initSrcPlugin;

function initSrcPlugin (data) {
    return gulp.src(data.src + 'init.js');
}