import prettier from "prettier";
import * as ts from "@fal-works/ts-transpile-modules";
import * as rollup from "./tools/rollup.js";
import * as esbuild from "./tools/esbuild.js";
import { dirs, filepaths } from "./config.js";
import { writeFile } from "./util/fs.js";

/** @param {string} code */
const formatDist = (code) => {
  const preFormatted = code.replace(/(.)(\n *\/\*\*)/gm, "$1\n$2");
  return prettier.format(preFormatted, { filepath: filepaths.dist });
};

/**
 * - Transpile with TypeScript
 * - Bundle with Rollup
 * - Minify with esbuild
 */
const run = async () => {
  await ts.transpileModules(dirs.src, dirs.tsOut);
  const bundleResult = await rollup.generate();
  const bundleCode = bundleResult.output[0].code;

  const writeDistMin = esbuild
    .minifyCode(bundleCode)
    .then(({ code }) => writeFile(filepaths.distMin, code));

  const writeDist = writeFile(filepaths.dist, formatDist(bundleCode));

  return Promise.all([writeDist, writeDistMin]);
};

run();
