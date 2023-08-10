import { QuestionCollection } from 'inquirer';
import { CommitMessageInput } from 'types/commit';

export const commitQuestions: QuestionCollection<CommitMessageAnswers> = [
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
