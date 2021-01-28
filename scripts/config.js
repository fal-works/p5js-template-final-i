const license = "CC0-1.0";

const banner = `/**
 * This is my p5.js sketch.
 *
 * @license ${license}
 */
`;
const bannerMin = `/** This is my p5.js sketch. */`;

const external = ["p5"];
const globals = { p5: "p5" };

// ----------------------------------------------------------------------------

/** @type {Config} */
const config = {
  external,
  globals,
  banner,
  bannerMin,
};

export default config;

/** @typedef {import("@fal-works/ts-build-helper").Config} Config */
