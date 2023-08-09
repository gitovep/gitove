import './config/alias';
import { Command } from 'commander';
import { createCommitCommand } from './commands';

const program = new Command();

program
  .name('gitove')
  .description('git cli for better team commit convention experience')
  .version('0.0.1')
  .addCommand(createCommitCommand())
  .action(program.help)
  .parse();
