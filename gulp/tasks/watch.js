const gulp = require("gulp"),
    watch = require('gulp-watch'),
    browswerSync = require('browser-sync').create();

gulp.task('watch', function () {
    browswerSync.init({
        notify: false,
        //open: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function() {
        console.info("HTML Changes detected...");
        browswerSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });

    watch('./app/assets/styles/**/*.postcss', function() {
        gulp.start('cssInject');
    });
});

gulp.task('cssInject', ['styles'], function() {
    gulp.src('./app/temp/styles/styles.css')
        .pipe(browswerSync.stream());
});