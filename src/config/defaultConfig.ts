import {
  DEFAULT_COMMIT_TYPES, DEFAULT_EMOJIS, DEFAULT_REPLACE_EXAMPLES, DEFAULT_SCOPE_EXAMPLES,
} from 'src/constants';

export const DEFAULT_CONFIG: Configuration = {
  type: [
    ...DEFAULT_COMMIT_TYPES,
  ],
  scope: [
    ...DEFAULT_SCOPE_EXAMPLES,
  ],
  replace: [
    ...DEFAULT_EMOJIS,
    ...DEFAULT_REPLACE_EXAMPLES,
  ],
};
