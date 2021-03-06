const gulp = require("gulp"),
   postcss = require("gulp-postcss"),
   autoprefixer = require("autoprefixer"),
   cssvars = require("postcss-simple-vars"),
   nestedcss = require("postcss-nested"),
   postcssImport = require("postcss-import"),
   mixins = require("postcss-mixins"),
   hexrgba = require("postcss-hexrgba");

gulp.task("styles", function() {
   console.log("Compiling CSS...");
   return gulp
      .src("./app/assets/styles/styles.css")
      .pipe(
         postcss([
            postcssImport,
            mixins,
            cssvars,
            nestedcss,
            hexrgba,
            autoprefixer
         ])
      )
      .on("error", function(errorInfo) {
         this.emit("end");
         console.warn(errorInfo.toString());
      })
      .pipe(gulp.dest("./app/temp/styles"));
});
