const gulp = require("gulp");
const { dest, src } = require("gulp");

const task1 = async () => {
  return src("./src/*.js").pipe(dest("output/result.js"))
};

const task2 = async () => {
  return src("./src/*.css").pipe(dest("output/result.css"))
}

const bothTasks = gulp.parallel(task1, task2);

exports.default = bothTasks;
