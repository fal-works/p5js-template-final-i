import esbuild from "esbuild";

const warn = (message: unknown) => console.warn(message);

export const printWarn = <T extends { warnings: esbuild.Message[] }>(
  result: T
) => {
  result.warnings.forEach(warn);
  return result;
};
