import esbuild from "esbuild";

import { bannerMin } from "../../config.js";

export const minifyCode: esbuild.TransformOptions = {
  minify: true,
  banner: bannerMin,
};
