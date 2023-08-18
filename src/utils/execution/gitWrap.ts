import executeGitCommand from './command';

const NEW_LINE: string = '\n';

export const add = async (): Promise<void> => {
  await executeGitCommand('add', '.');
};

export const push = async (): Promise<void> => {
  await executeGitCommand('push');
};

export const commit = async (
  title: string,
  bodies: string[],
) => {
  const message: string = `-m ${title}${NEW_LINE}${NEW_LINE}${bodies.join(NEW_LINE)}`;

  try {
    const result = await executeGitCommand('commit', message);
    console.log(result.stdout);
    
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
