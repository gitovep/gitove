export const DEFAULT_COMMIT_TYPES: CustomCommitConfig[] = [
  {
    name: 'feat:',
    alias: 'feat',
    description: 'Add new feature.',
  },
  {
    name: 'fix:',
    alias: 'fix',
    description: 'Fix a bug.',
  },
  {
    name: 'refact:',
    alias: 'refact',
    description: 'Refactor code. No business logic change.',
  },
  {
    name: 'design:',
    alias: 'design',
    description: 'Add or update UI style.',
  },
  {
    name: 'style:',
    alias: 'style',
    description: 'Update in code format, style, etc. No business logic change.',
  },
  {
    name: 'comment:',
    alias: 'comment',
    description: 'Add or update annotations.',
  },
  {
    name: 'docs:',
    alias: 'docs',
    description: 'Add or update documentation.',
  },
  {
    name: 'test:',
    alias: 'test',
    description: 'Add or update tests.',
  },
  {
    name: 'chore:',
    alias: 'chore',
    description: 'Add or update build tasks, package manager configs, etc.',
  },
  {
    name: 'init:',
    alias: 'init',
    description: 'Initialize project.',
  },
  {
    name: 'rename:',
    alias: 'rename',
    description: 'Rename file or directory.',
  },
  {
    name: 'remove:',
    alias: 'remove',
    description: 'Remove file or directory.',
  },
  {
    name: 'BREAKING CHANGE:',
    alias: 'break',
    description: 'Significant change which is not backward compatible.',
  },
];
