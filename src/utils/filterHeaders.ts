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

const filterHeader = (headerType: CommitHeaderType, input?: string) => {
  const list = DEFAULT_CONFIG[headerType];
  const fuse = new Fuse(list, options);

  return input ? fuse.search(input).map(({ item }) => item) : list;
};

export const filterHeaderSource = (headerType: CommitHeaderType) => {
  return (_: unknown, input: string) => {
    return Promise.resolve(
      filterHeader(headerType, input).map((keyword) => ({
        name: `${keyword.alias} - ${keyword.description}`,
        value: keyword.name,
      })),
    );
  };
};
