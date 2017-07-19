"use strict";

/**
 * DEPENDENCIES
 */
const gulp = require("gulp");
const browserify = require("browserify");
const del = require("del");
const tsify = require("tsify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const tslint = require("gulp-tslint").default;
const tsc = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const bump = require("gulp-bump");
const mocha = require("gulp-mocha");
const istanbul = require("gulp-istanbul");
const browserSync = require("browser-sync").create();

/**
 * CONFIGURATION
 */
const tsProject = tsc.createProject("tsconfig.json");
const tsTestProject = tsc.createProject("tsconfig.json");
const libraryName = "ts-vscode-boilerplate";
const outputFolder = "dist/";
const outputFileName = libraryName + ".min.js";
const versionFiles = ["package.json"];
const srcMainTs = "src/main.ts";
const srcTs = "src/**/*.ts";
const srcInterfacesTs = "src/interfaces/interfaces.d.ts";
const srcTestTs = "test/**/*.spec.ts";
const srcJs = "src/**/*.js";
const srcTestJs = "test/**/*.js";
const srcDistJs = "dist/**/*.js";
const bundler = browserify({
  debug: true,
  standalone: libraryName
});
const lintConfig = {
  formatter: "verbose",
  emitError: (process.env.CI) ? true : false,
  program: require('tslint').Linter.createProgram("./tsconfig.json")
};
const browserSyncConfig = {
  server: {
    "baseDir": "."
  }
};
const mochaConfig = {
  ui: "bdd",
  reporter: "spec"
};

/**
 * CLEAN
 */
gulp.task("clean", () =>
  del([outputFolder, "coverage/"])
);

/**
 * LINT
 */
gulp.task("lint", () =>
  gulp.src([srcTs, srcTestTs, srcInterfacesTs])
    .pipe(tslint(lintConfig))
    .pipe(tslint.report())
);

/**
 * BUILD:DEV
 */
gulp.task("build:dev", () =>
bundler.add(srcMainTs)
  .plugin(tsify, { noImplicitAny: true })
  .bundle()
  .on("error", (err) => console.error(err.toString()))
  .pipe(source(outputFileName))
  .pipe(buffer())
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(uglify())
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(outputFolder))
);

/**
 * BUILD:PRE
 */
gulp.task("build:pre", gulp.parallel("clean", "lint"));

/**
 * BUILD:TEST
 */
gulp.task("build:test", () =>
  gulp.src([srcTs, srcTestTs, srcInterfacesTs], { base: "." })
    .pipe(tsTestProject())
    .on("error", (err) => process.exit(1))
    .js
    .pipe(gulp.dest("."))
);

/**
 * ISTANBUL:HOOK
 */
gulp.task("istanbul:hook", () =>
  gulp.src([srcJs])
    .pipe(istanbul())
    .pipe(istanbul.hookRequire())
);

/**
 * MOCHA:ISTANBUL
 */
gulp.task("mocha:istanbul", () =>
  gulp.src([srcTestJs])
    .pipe(mocha(mochaConfig))
    .pipe(istanbul.writeReports())
);

/**
 * RUN:TEST
 */
gulp.task("run:test", gulp.series("build:pre", "build:test", "istanbul:hook", "mocha:istanbul"));

/**
 * RUN:DEV
 */
gulp.task("run:dev", gulp.series("build:pre", "build:dev"));

/**
 * DEFAULT
 */
gulp.task("default", gulp.series("run:test", "run:dev"));

/**
 * WATCH
 */
gulp.task("watch", gulp.series("default", () => {
  browserSync.init(browserSyncConfig);

  gulp.watch([srcTs, srcTestTs, srcInterfacesTs], gulp.series("default"));
  gulp.watch(srcDistJs).on("change", browserSync.reload);
}));

/**
 * WATCH:TEST
 */
gulp.task("watch:test", gulp.series("run:test", () => {
  browserSync.init(browserSyncConfig);

  gulp.watch([srcTs, srcTestTs, srcInterfacesTs], gulp.series("run:test"));
  gulp.watch([srcTs, srcTestTs, srcInterfacesTs]).on("change", browserSync.reload);
}));

/**
 * BUMP:PATCH
 */
gulp.task("bump:patch", (done) => {
  gulp.src(versionFiles)
  .pipe(bump({ type: "patch" }))
  done()
});

/**
 * BUMP:MINOR
 */
gulp.task("bump:minor", (done) => {
  gulp.src(versionFiles)
  .pipe(bump({ type: "minor" }))
  done()
});

/**
 * BUMP:MAJOR
 */
gulp.task("bump:major", (done) => {
  gulp.src(versionFiles)
  .pipe(bump({ type: "major" }))
  done()
});
