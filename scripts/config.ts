import type { Config } from "@fal-works/ts-build-helper";

const license = "CC0-1.0";

const banner = `/**
 * This is my p5.js sketch.
 *
 * @license ${license}
 */
`;
const bannerMin = `/** This is my p5.js sketch. */`;

export const config: Config = {
  external: ["p5"],
  globals: { p5: "p5" },
  banner,
  bannerMin,
};
