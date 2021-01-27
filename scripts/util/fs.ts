import * as fs from "fs";
import * as path from "path";

const returnVoid = () => {};

export const rm = async (path: string): Promise<void> =>
  await fs.promises.rm(path, { force: true, recursive: true });

export const writeFile = async (
  filepath: string,
  text: string
): Promise<void> => {
  await fs.promises
    .mkdir(path.dirname(filepath), { recursive: true })
    .catch(returnVoid);

  await fs.promises.writeFile(filepath, text);
};

export const { readFile } = fs.promises;
