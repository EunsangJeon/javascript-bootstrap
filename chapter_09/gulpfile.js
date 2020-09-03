const { src, dest, series } = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");

function lintTask() {
  return src([ "src/**/*.js", "public/src/**/*.js" ])
    .pipe(eslint())
    .pipe(eslint.format());
}

function serverTask() {
  return src("src/**/*.js").pipe(babel()).pipe(dest("dist"));
}

function clientTask() {
  return src("public/src/**/*.js").pipe(babel()).pipe(dest("public/dist"));
}

exports.default = series(lintTask, serverTask, clientTask);