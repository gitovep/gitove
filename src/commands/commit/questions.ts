import inquirer, { QuestionCollection } from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import { DEFAULT_CONFIG } from 'src/config/defaultConfig';
import { capitalizeTitle, filterHeaderSource } from 'src/utils';
import { CommitMessageInput } from 'src/types/commit';

inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt);

export const commitQuestions: QuestionCollection<CommitMessageAnswers> = [
  {
    name: CommitMessageInput.TYPE,
    message: 'Choose commit type:',
    type: 'autocomplete',
    source: filterHeaderSource('type'),
  },
  ...(DEFAULT_CONFIG.scope.length > 0
    ? [
      {
        name: CommitMessageInput.SCOPE,
        message: 'Choose commit scope:',
        type: 'autocomplete',
        source: filterHeaderSource('scope'),
      },
    ]
    : []),
  {
    name: CommitMessageInput.TITLE,
    message: 'Enter commit message:',
    type: 'input',
    validate: (input: string) => (input ? true : 'Commit message is required'),
    transformer: (input: string) => {
      return `[${input.length}/${48}]: ${capitalizeTitle(input)}`;
    },
  },
  {
    name: CommitMessageInput.BODY,
    message: 'Enter commit details:',
    type: 'input',
  },
];
