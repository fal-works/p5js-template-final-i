import { watch } from "@fal-works/ts-build-helper";
import paths from "../../paths.js";
import config from "../bundle-config.js";

void watch.run(paths, config);
