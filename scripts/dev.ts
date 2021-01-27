import * as chokidarIncremental from "@fal-works/chokidar-incremental";

import { dirs } from "./config.js";
import * as esbuild from "./use-config/esbuild.js";

const onStart = async () => {
  const rebundle = (await esbuild.bundleIncremental()).rebuild;
  const reminify = (await esbuild.minifyIncremental()).rebuild;

  const onChange = () => rebundle().then(reminify);
  const onExit = () => {
    rebundle.dispose();
    reminify.dispose();
  };

  return { onChange, onExit };
};

void chokidarIncremental.watch(`${dirs.src}/**/*.ts`, onStart, {});
