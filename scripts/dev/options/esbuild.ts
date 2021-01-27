import esbuild from "esbuild";
import { globalExternals } from "@fal-works/esbuild-plugin-global-externals";

import { filepaths, globals } from "../../config.js";

export const bundle: esbuild.BuildOptions & { incremental: true } = {
  entryPoints: [filepaths.srcEntry],
  bundle: true,
  outfile: filepaths.dist,
  plugins: [globalExternals(globals)],
  incremental: true,
};

export const minify: esbuild.BuildOptions & { incremental: true } = {
  entryPoints: [filepaths.dist],
  minify: true,
  outfile: filepaths.distMin,
  incremental: true,
};
