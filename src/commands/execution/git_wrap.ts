import executeCommand from './command';

const executeGitCommand = async (...commands: string[]): Promise<void> => {
  await executeCommand('git', ...commands);
};

export const add = async (): Promise<void> => {
  await executeGitCommand('add', '.');
};

export const push = async (): Promise<void> => {
  await executeGitCommand('push');
};

export const commit = async (title: string, ...bodies: string[]): Promise<void> => {
  const messageFlag: string = '-m';
  const args: string[] = ['commit', messageFlag, title];
  bodies.forEach((body) => args.push(messageFlag, body));
  await executeGitCommand(...args);
};
