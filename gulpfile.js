 /*
 * vscode-gulpfile.js
 *
 * Copyright (c) 2016, 2017 Jan T. Sott
 * Licensed under the MIT license.
 */

 // Dependencies
const gulp = require('gulp');
const debug = require('gulp-debug');
const jsonlint = require('gulp-jsonlint');
const raster = require('gulp-raster');
const rename = require('gulp-rename');
const xmlVal = require('gulp-xml-validator');

// Supported files
const jsonFiles = [
  'package.json',
  'snippets/*.json'
];

const xmlFiles = [
  'syntaxes/*.tmLanguage'
];

const svgFiles = [
  'src/logo.svg'
];

// Lint JSON
gulp.task('lint:json', gulp.series( (done) => {
  gulp.src(jsonFiles)
    .pipe(debug({title: 'json-lint'}))
    .pipe(jsonlint())
    .pipe(jsonlint.failAfterError())
    .pipe(jsonlint.reporter());
  done();
}));

// Validate XML
gulp.task('lint:xml', gulp.series( (done) => {
  gulp.src(xmlFiles)
    .pipe(debug({title: 'xml-validator'}))
    .pipe(xmlVal());
  done();
}));

// Convert SVG
gulp.task('convert:svg', gulp.series( (done) => {
  gulp.src(svgFiles)
    .pipe(raster())
    .pipe(rename("logo.png"))
    .pipe(gulp.dest('./images'));
  done();
}));

// Available tasks
gulp.task('lint', gulp.parallel('lint:json', 'lint:xml', (done) => {
  done();
}));
gulp.task('build', gulp.parallel('convert:svg', (done) => {
  done();
}));
