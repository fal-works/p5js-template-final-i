import esbuild from "esbuild";
import * as chokidarIncremental from "@fal-works/chokidar-incremental";

import { dirs } from "../config.js";
import { printWarn } from "../tools/esbuild.js";
import * as options from "./options/index.js";

const onStart = async () => {
  const bundle = await esbuild.build(options.bundle).then(printWarn);
  const minify = await esbuild.build(options.minify).then(printWarn);

  const onChange = () => bundle.rebuild().then(minify.rebuild);
  const onExit = () => {
    bundle.rebuild.dispose();
    minify.rebuild.dispose();
  };

  return { onChange, onExit };
};

void chokidarIncremental.watch(`${dirs.src}/**/*.ts`, onStart, {});
