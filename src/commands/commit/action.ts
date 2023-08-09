import inquirer, { QuestionCollection } from 'inquirer';
import { commitMessage } from './message';
import { is } from 'typia';
import { CommitMessageInput } from 'types/commit';

type CommitMessageAnswers = Record<CommitMessageInput, string | undefined>;

const questions: QuestionCollection<CommitMessageAnswers> = [
  {
    name: CommitMessageInput.TYPE,
    type: 'input',
  },
  {
    name: CommitMessageInput.SCOPE,
    type: 'input',
  },
  {
    name: CommitMessageInput.TITLE,
    type: 'input',
  },
  {
    name: CommitMessageInput.BODY,
    type: 'input',
  },
];

export const commitAction = async () => {
  const answers: CommitMessageAnswers = await inquirer.prompt(questions);

  Object.entries(answers).forEach(([key, value]) => {
    if (value && is<CommitMessageInput>(key)) {
      commitMessage.set(key, value);
    }
  });

  console.log(commitMessage);
};
