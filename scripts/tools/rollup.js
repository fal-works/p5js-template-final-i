// https://rollupjs.org/

import * as rollup from "rollup";
import { filepaths, banner, external, globals } from "../config.js";

/** @type {rollup.InputOptions} */
const inputOptions = {
  input: filepaths.bundleInput,
  external,
  plugins: [],
};

/** @type {rollup.OutputOptions} */
const outputOptions = {
  format: "iife",
  banner,
  globals,
  interop: "default",
};

export const generate = async () => {
  const bundle = await rollup.rollup(inputOptions);
  return bundle.generate(outputOptions);
};
