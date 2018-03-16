const gulp = require("gulp"),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars')
    nestedcss = require('postcss-nested');

gulp.task('default', function(){
    return console.log("Gulp task complete");
})

gulp.task("html", function(){
    return console.log("Compiling HTML...");
})

gulp.task("styles", function(){
    console.log("Compiling CSS...");
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssvars, nestedcss, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('watch', function () {
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    })
})
