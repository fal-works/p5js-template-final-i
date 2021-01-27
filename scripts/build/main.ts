import prettier from "prettier";
import * as ts from "@fal-works/ts-transpile-modules";
import * as rollup from "rollup";
import esbuild from "esbuild";
import { printWarn } from "../tools/esbuild.js";
import { dirs, filepaths } from "../config.js";
import { writeFile } from "../util/fs.js";
import * as options from "./options/index.js";

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
  const built = await rollup.rollup(options.inputOptions);
  const bundled = await built.generate(options.outputOptions);
  const bundledCode = bundled.output[0].code;

  const writeDistMin = esbuild
    .transform(bundledCode.replace("@license", ""), options.minifyCode)
    .then(printWarn)
    .then(({ code }) => writeFile(filepaths.distMin, code));

  const writeDist = writeFile(filepaths.dist, formatDist(bundledCode));

  await Promise.all([writeDist, writeDistMin]);

  console.log("build complete.");
};

void run();
