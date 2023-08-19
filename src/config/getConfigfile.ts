import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { DEFAULT_CONFIG } from 'src/config/defaultConfig';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const test = path.resolve(__dirname, '../..');
const dirpath = path.join(test, '.gitoverc.json');

const readUserConfigFile = () => {
  const readfile: Configuration = JSON.parse(readFileSync(dirpath, { encoding: 'utf-8', flag: 'r' }));
  return readfile;
};

// user config file이 있는지 확인 후 없으면 default config 읽음
export const getConfigfile = () => {
  return existsSync(dirpath) ? readUserConfigFile() : DEFAULT_CONFIG;
};
