const gulp = require("gulp"),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nestedcss = require('postcss-nested'),
    postcssImport = require('postcss-import');

gulp.task("styles", function(){
    console.log("Compiling CSS...");
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([postcssImport, cssvars, nestedcss, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
});