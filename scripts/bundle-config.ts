import type { Config } from "@fal-works/ts-build-helper";

import { nodeResolve } from "@rollup/plugin-node-resolve";

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

const config: Config = {
  external,
  globals,
  banner,
  bannerMin,
  overrides: {
    rollupInput: { plugins: [nodeResolve()] },
  },
};

export default config;
