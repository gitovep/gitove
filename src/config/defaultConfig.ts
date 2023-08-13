import { DEFAULT_COMMIT_TYPES, DEFAULT_EMOJIS, DEFAULT_REPLACE_EXAMPLES } from 'src/constants';

export const DEFAULT_CONFIG: Configuration = {
  type: [
    ...DEFAULT_COMMIT_TYPES,
  ],
  scope: [],
  replace: [
    ...DEFAULT_EMOJIS,
    ...DEFAULT_REPLACE_EXAMPLES,
  ],
};
