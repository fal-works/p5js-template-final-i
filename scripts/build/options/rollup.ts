// https://rollupjs.org/

import * as rollup from "rollup";
import { filepaths, banner, external, globals } from "../../config.js";

export const inputOptions: rollup.InputOptions = {
  input: filepaths.bundleInput,
  external,
  plugins: [],
};

export const outputOptions: rollup.OutputOptions = {
  format: "iife",
  banner,
  globals,
  interop: "default",
};
