import * as build from "@fal-works/ts-build-helper/lib/build/index.js";
import paths from "../../paths";
import config from "../bundle-config";

export default build.run(paths, config);
