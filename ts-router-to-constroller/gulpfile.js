const { src,dest,watch,series,task } = require('gulp')
const del = require('del');
const ts = require('gulp-typescript');
const nodemon = require('gulp-nodemon');
const livereload = require('gulp-livereload');  

function clean(cb){
    return del(['dist'],cb)
}

// function toJS(){
//     return src('src/**/*.ts')
//         .pipe(tsProject())
//         .pipe(dest('output'))
// }

function server(){
    nodemon({
        inspect: true,
        script: 'dist/app.js',
        watch: ['src'],
        ext: 'ts',
        env: { NODE_ENV: 'development' },
        // tasks: ['build'],
    }).on('crash', () => {
        console.error('Application has crashed!\n');
    });
}

// const build = series(clean,toJS);
// task('build',build)

// exports.build = build;
// exports.default = createServer

const gulp = require("gulp");
const tsProject = ts.createProject("tsconfig.json");

function build(){
    return watch('src/**/*.ts',{ events:'all',delay:500,ignoreInitial:false },function(){
        return src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest("dist"))
    })
}

// 当客户端被监听的文件改变时，刷新浏览器  
function reload() {  
    livereload.listen();  
    var server = livereload();  
    return gulp.watch('src/**/*.js', function(event) {  
        // server.changed(event.path); 
        livereload.changed(event.path); 
    });  
}

exports.default =  series(clean,build)

// gulp.task("default", function () {
//   return tsProject.src()
//     .pipe(tsProject())
//     .pipe(gulp.dest("dist"));
// });