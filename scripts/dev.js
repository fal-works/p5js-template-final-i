import * as esbuild from "./tools/esbuild.js";

import { dirs } from "./config.js";
import * as chokidarIncremental from "@fal-works/chokidar-incremental";

const build = async () => {
  const bundle = await esbuild.bundleIncremental();
  const minify = await esbuild.minifyIncremental();

  return {
    rebundle: bundle.rebuild,
    reminify: minify.rebuild,
  };
};

const onStart = async () => {
  const { rebundle, reminify } = await build();

  const onChange = () => rebundle().then(reminify);
  const onExit = () => {
    rebundle.dispose();
    reminify.dispose();
  };

  return { onChange, onExit };
};

const start = async () => {
  chokidarIncremental.watch(`${dirs.src}/**/*.ts`, onStart, {});
};

start();
