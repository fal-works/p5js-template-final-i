// https://rollupjs.org/

import * as rollup from "rollup";

export const generate = async (
  inputOptions: rollup.InputOptions,
  outputOptions: rollup.OutputOptions
) => {
  const bundle = await rollup.rollup(inputOptions);
  return bundle.generate(outputOptions);
};
