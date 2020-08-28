/* eslint-disable no-undef */
const { src, dest, series } = require("gulp");
const babel = require("gulp-babel");
const eslint = require("gulp-eslint");

function lintTask() {
  return src(["es6/**/*.js", "public/es6/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
}

function serverTask() {
  return src("es6/**/*.js").pipe(babel()).pipe(dest("dist"));
}

function clientTask() {
  return src("public/es6/**/*.js").pipe(babel()).pipe(dest("public/dist"));
}

exports.default = series(lintTask, serverTask, clientTask);
