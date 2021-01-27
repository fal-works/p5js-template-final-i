export const dirs = {
  src: "src",
  tsOut: "ts-out",
  dist: "dist",
};

export const filenames = {
  srcEntry: "main.ts",
  dist: "script.js",
};

const license = "CC0-1.0";

export const banner = `/**
 * This is my p5.js sketch.
 *
 * @license ${license}
 */
`;
export const bannerMin = `/** This is my p5.js sketch. */`;

export const external = ["p5"];
export const globals = { p5: "p5" };

// ----

export const filepaths = {
  srcEntry: `${dirs.src}/${filenames.srcEntry}`,
  bundleInput: `${dirs.tsOut}/${filenames.srcEntry.replace(
    /\.ts(x?)$/,
    ".js$1"
  )}`,
  dist: `${dirs.dist}/${filenames.dist}`,
  distMin: `${dirs.dist}/${filenames.dist.replace(/\.js$/, ".min.js")}`,
};
