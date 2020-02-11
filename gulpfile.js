var { src, dest, series, concat } = require('gulp');
var sass = require('gulp-sass');
var cssc = require('gulp-css-condense');
var sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
var concatCss = require('gulp-concat-css');

exports.dev = () => {
  return src('./scss/**')
    .pipe(sourcemaps.init())
    .pipe(sass.sync())
    .pipe(sourcemaps.write('./'))
    .pipe(dest('./dist/dev'));
};

exports.prod = () => {
  return src('./scss/**')
    .pipe(sass.sync())
    .pipe(concatCss('main.css'))
    .pipe(postcss([autoprefixer()]))
    .pipe(cssc())
    .pipe(dest('./dist/prod'));
};

exports.default = series([this.prod, this.dev]);

