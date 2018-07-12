var gulp = require('gulp')
var stylus = require('gulp-stylus')
var path = require('path')

const stylusExt = '*.styl'
const source = path.join(__dirname, 'src/views/**/', stylusExt)
const public = path.join(__dirname, 'pub/css/')

gulp.task('stylus', function() {
    gulp.src(source)
        .pipe(stylus())
        .pipe(gulp.dest(public))
    }
)

gulp.task('stylus:watch', function() {
    gulp.watch(source, ['stylus'])
});
