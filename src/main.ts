import p5 from "p5";
import { createSketch } from "@fal-works/p5-inst";
import { setup } from "./setup";
import { draw } from "./draw";

const sketch = createSketch({
  setup,
  draw,
});

new p5(sketch);
