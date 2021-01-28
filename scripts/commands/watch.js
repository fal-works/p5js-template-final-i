import * as watch from "@fal-works/ts-build-helper/lib/watch/index.js";
import paths from "../paths.js";
import config from "../config.js";

void watch.run(paths, config);
