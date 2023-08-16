import inquirer, { QuestionCollection } from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import { DEFAULT_CONFIG } from 'src/config/defaultConfig';
import { CommitMessageInput } from 'src/types/commit';
import { filterHeaderSource } from 'src/utils/filterHeaders';

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
  },
  {
    name: CommitMessageInput.BODY,
    message: 'Enter commit details:',
    type: 'input',
  },
];
