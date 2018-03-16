const gulp = require("gulp"),
    watch = require('gulp-watch');

gulp.task('default', function(){
    return console.log("Gulp task complete");
})

gulp.task("html", function(){
    return console.log("Compiling HTML...");
})

gulp.task("styles", function(){
    return console.log("Compiling CSS...");
})

gulp.task('watch', function () {
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    })
})
