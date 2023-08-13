import executeGitCommand from './command';

const NEW_LINE: string = '\n';

const getBodySeparator = (blankBetweenBody: boolean): string => {
  return blankBetweenBody ? `${NEW_LINE}${NEW_LINE}` : NEW_LINE;
};

export const add = async (): Promise<void> => {
  await executeGitCommand('add', '.');
};

export const push = async (): Promise<void> => {
  await executeGitCommand('push');
};

/*
2023-08-13
The only option for the current commit is 'blankBetweenBody'
So we use a boolean parameter to distinguish between them
However, if more options are added in the future, consider using an interface or type.
*/
export const commit = async (
  title:string,
  bodies: string[],
  blankBetweenBody: boolean = false,
) => {
  const bodySeperator = getBodySeparator(blankBetweenBody);
  const message: string = `-m ${title}${NEW_LINE}${NEW_LINE}${bodies.join(bodySeperator)}`;
  await executeGitCommand('commit', message);
};
