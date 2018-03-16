const gulp = require("gulp"),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nestedcss = require('postcss-nested'),
    postcssImport = require('postcss-import'),
    browswerSync = require('browser-sync').create();

gulp.task('default', function(){
    return console.log("Gulp task complete");
});

gulp.task("html", function(){
    return console.log("Compiling HTML...");
});

gulp.task("styles", function(){
    console.log("Compiling CSS...");
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([postcssImport, cssvars, nestedcss, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {
    browswerSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function() {
        browswerSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function() {
    gulp.src('./app/temp/styles/styles.css')
        .pipe(browswerSync.stream());
});