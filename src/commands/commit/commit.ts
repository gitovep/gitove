import { Command } from 'commander';
import { commitAction } from './action';

export const createCommitCommand = () => {
  return new Command().command('commit')
    .alias('c')
    .description('Commit staged changes')
    .action(commitAction);
};
