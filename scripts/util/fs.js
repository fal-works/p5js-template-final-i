import * as fs from "fs";
import * as path from "path";

const returnVoid = () => {};

/**
 * @param {string} path
 */
export const rm = async (path) =>
  await fs.promises.rm(path, { force: true, recursive: true });

/**
 * @param {string} filepath
 * @param {string} text
 */
export const writeFile = async (filepath, text) => {
  await fs.promises
    .mkdir(path.dirname(filepath), { recursive: true })
    .catch(returnVoid);

  await fs.promises.writeFile(filepath, text);
};

export const { readFile } = fs.promises;
