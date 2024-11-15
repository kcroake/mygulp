const { series, parallel, gulp, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const webp = require('gulp-webp');

function buildStyles() {
	return gulp.src('./files/css/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./files/css'));
};

// function buildWebP() {
// 	return gulp.src('./files/images/*.jpg')
// 		.pipe(webp())
// 		.pipe(gulp.dest('.files/images'))	
// };

// exports.compimg = buildWebP;

exports.default = function() {
	watch('./files/css/*.scss', buildStyles);	
};