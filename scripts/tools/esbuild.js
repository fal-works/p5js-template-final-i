import esbuild from "esbuild";
import { globalExternals } from "@fal-works/esbuild-plugin-global-externals";

import { filepaths, globals, bannerMin } from "../config.js";

/** @param {any} message */
const warn = (message) => console.warn(message);

export const bundleIncremental = async () => {
  const out = await esbuild.build({
    entryPoints: [filepaths.srcEntry],
    bundle: true,
    outfile: filepaths.dist,
    plugins: [globalExternals(globals)],
    incremental: true,
  });
  out.warnings.forEach(warn);

  return out;
};

export const minifyIncremental = async () => {
  const out = await esbuild.build({
    entryPoints: [filepaths.dist],
    minify: true,
    outfile: filepaths.distMin,
    incremental: true,
  });
  out.warnings.forEach(warn);

  return out;
};

/**
 * @param {string} code
 */
export const minifyCode = async (code) => {
  code = code.replace("@license", "");
  const out = await esbuild.transform(code, {
    minify: true,
    banner: bannerMin,
  });
  out.warnings.forEach(warn);

  return out;
};
