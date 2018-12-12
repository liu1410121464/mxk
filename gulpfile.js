var gulp = require('gulp'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    bable = require('gulp-babel'),
    rev = require('gulp-rev'),
    collector = require('gulp-rev-collector'),
    css = require('gulp-minify-css'),
    html = require('gulp-minify-html'),
    img = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('minihtml', function () {
    gulp.src('shoe_show/*.html')
        .pipe(gulp.dest('dist'))
})
gulp.task('minicss', function () {
    gulp.src('shoe_show/static/**/*.css')
        .pipe(gulp.dest('dist'))
})
gulp.task('minify', function () {
    gulp.src('shoe_show/static/**/*.js') // 要压缩的js文件
        .pipe(uglify())  //使用uglify进行压缩,更多配置请参考：
        .pipe(gulp.dest('dist')); //压缩后的路径
});
gulp.task('img', function () {
    return gulp.src('shoe_show/static/**/*')
        .pipe(img({
            progressive: true,
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest('dist/static'));
});
gulp.task('connect', function () {
    connect.server({
        root: 'dist',
        livereload: true,
        port: 7777
    });
})
gulp.task('watch', function () {
    gulp.watch('shoe_show/static/*.html', ['minihtml'])
})