// https://rollupjs.org/

import * as rollup from "rollup";
import { filepaths, banner, external, globals } from "../config.js";

const inputOptions: rollup.InputOptions = {
  input: filepaths.bundleInput,
  external,
  plugins: [],
};

const outputOptions: rollup.OutputOptions = {
  format: "iife",
  banner,
  globals,
  interop: "default",
};

export const generate = async () => {
  const bundle = await rollup.rollup(inputOptions);
  return bundle.generate(outputOptions);
};
