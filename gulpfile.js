const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const minifyCss = require('gulp-clean-css')
const sourceMaps = require('gulp-sourcemaps')
const concat = require('gulp-concat')

const sassSrc = './src/sass/**/*.scss'
const outputDir = './src'

const bundleSass = () => {
  return src(sassSrc)
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('index.css'))
    // .pipe(minifyCss())
    .pipe(sourceMaps.write())
    .pipe(dest(outputDir))
}

const devWatch = () => {
  watch(sassSrc, { ignoreInitial: true, usePolling: true }, bundleSass)
}

exports.default = series(bundleSass, devWatch)
exports.bundleSass = bundleSass