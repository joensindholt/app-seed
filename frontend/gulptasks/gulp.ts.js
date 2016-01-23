var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('ts', function () {

    var tsProject = ts.createProject('src/tsconfig.json');

    var tsResult = tsProject.src()
		.pipe(ts(tsProject));

	return tsResult.js.pipe(gulp.dest('.'));
});
