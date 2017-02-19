var gulp = require('gulp');
var util = require('gulp-util');
var config = require('../config')();

gulp.task('deploy', function() {
	var ghpages = require('gh-pages');
	ghpages.publish(config.build.path, function(err) { 
		util.log(err);
		util.log('Error deploying to ghpages');
	    process.exit(1);
	});
});