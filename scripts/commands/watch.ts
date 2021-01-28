import * as watch from "@fal-works/ts-build-helper/lib/watch/index.js";
import { paths } from "../paths";
import { config } from "../config";

void watch.run(paths, config);
