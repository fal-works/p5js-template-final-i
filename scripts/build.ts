import prettier from "prettier";
import * as ts from "@fal-works/ts-transpile-modules";
import * as rollup from "./use-config/rollup.js";
import * as esbuild from "./use-config/esbuild.js";
import { dirs, filepaths } from "./config.js";
import { writeFile } from "./util/fs.js";

const formatDist = (code: string) => {
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

  await Promise.all([writeDist, writeDistMin]);

  console.log("build complete.");
};

void run();
