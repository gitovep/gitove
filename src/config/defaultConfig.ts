import { DEFAULT_COMMIT_TYPES, DEFAULT_EMOJIS } from 'src/constants';

export const DEFAULT_CONFIG: Configuration = {
  type: [
    ...DEFAULT_COMMIT_TYPES,
  ],
  scope: [],
  replace: [
    ...DEFAULT_EMOJIS,
  ],
};
