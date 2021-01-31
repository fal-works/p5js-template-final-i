const paths = {
  dirs: {
    src: "src",
    tsOut: "ts-out",
    dist: "dist",
    scripts: "scripts",
  },
  filenames: {
    srcEntry: "main.ts",
    dist: "script.js",
  },
};

// ----------------------------------------------------------------------------

/** @type {Paths} */
const typeCheck = paths;
typeCheck;

module.exports = paths;

/** @typedef {import("@fal-works/ts-build-helper").Paths} Paths */
