import inquirer from 'inquirer';
import { commitMessage } from './message';
import { commitQuestions } from './questions';
import { is } from 'typia';

export const commitAction = async () => {
  const answers: CommitMessageAnswers = await inquirer.prompt(commitQuestions);

  Object.entries(answers).forEach(([key, value]) => {
    if (value && is<CommitMessageInput>(key)) {
      commitMessage.set(key, value);
    }
  });

  console.log(commitMessage);
};
