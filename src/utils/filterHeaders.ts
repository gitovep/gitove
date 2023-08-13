import Fuse from 'fuse.js';
import { DEFAULT_CONFIG } from 'src/config/defaultConfig';

const options = {
  threshold: 0.5,
  keys: [
    {
      name: 'alias',
      weight: 0.33,
    },
    {
      name: 'description',
      weight: 0.67,
    },
  ],
};

export const filterCommitType = (input?: string) => {
  const list = DEFAULT_CONFIG.type;
  const fuse = new Fuse(list, options);

  return input ? fuse.search(input).map(({ item }) => item) : list;
};

export const filterCommitScope = (input?: string) => {
  const list = DEFAULT_CONFIG.scope;
  const fuse = new Fuse(list, options);

  return input ? fuse.search(input).map(({ item }) => item) : list;
};
