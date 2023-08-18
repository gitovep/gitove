// @ts-ignore
import { execa } from 'execa';

const executeCommand = async (file: string, ...commands: string[])
: Promise<execa.ExecaReturnValue<string>> => execa(file, commands);

const executeGitCommand = async (...commands: string[]) => {
  return executeCommand('git', ...commands);
};

export default executeGitCommand;
