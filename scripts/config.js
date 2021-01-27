export const dirs = {
  src: "src",
  tsOut: "ts-out",
  dist: "dist",
};

export const filenames = {
  srcEntry: "main.ts",
  bundleInput: "main.js",
  dist: "script.js",
  distMin: "script.min.js",
};

export const filepaths = {
  srcEntry: `${dirs.src}/${filenames.srcEntry}`,
  bundleInput: `${dirs.tsOut}/${filenames.bundleInput}`,
  dist: `${dirs.dist}/${filenames.dist}`,
  distMin: `${dirs.dist}/${filenames.distMin}`,
};

const license = "CC0-1.0";

export const banner = `/**
 * This is my p5.js sketch.
 *
 * @license ${license}
 */
`;
export const bannerMin = `/** @copyright 2021 FAL - https://www.fal-works.com/ */`;
export const external = ["p5"];
export const globals = { p5: "p5" };
