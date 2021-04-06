const gulp = require("gulp");
const concat = require("gulp-concat");
const { dest, src } = require("gulp");

const task1 = async () => {
  return src("./src/*.js")
  .pipe(concat("result.js"))
  .pipe(dest("./output"));
};

const task2 = async () => {
  return src("./src/*.css")
  .pipe(concat("result.css"))
  .pipe(dest("./output"))
}

const bothTasks = gulp.parallel(task1, task2);

exports.default = bothTasks;
