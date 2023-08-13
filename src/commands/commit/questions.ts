import inquirer, { QuestionCollection } from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import { DEFAULT_CONFIG } from 'src/config/defaultConfig';
import { CommitMessageInput } from 'src/types/commit';
import { filterCommitScope, filterCommitType } from 'src/utils/filterHeaders';

inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt);

export const commitQuestions: QuestionCollection<CommitMessageAnswers> = [
  {
    name: CommitMessageInput.TYPE,
    message: 'Choose commit type:',
    type: 'autocomplete',
    source: (_: unknown, input: string) => {
      return Promise.resolve(
        filterCommitType(input).map((keyword) => ({
          name: `${keyword.alias} - ${keyword.description}`,
          value: keyword.name,
        })),
      );
    },
  },
  ...(DEFAULT_CONFIG.scope.length > 0
    ? [
      {
        name: CommitMessageInput.SCOPE,
        message: 'Choose commit scope:',
        type: 'autocomplete',
        source: (_: unknown, input: string) => {
          return Promise.resolve(
            filterCommitScope(input).map((keyword) => ({
              name: `${keyword.alias} - ${keyword.description}`,
              value: keyword.name,
            })),
          );
        },
      },
    ]
    : []),
  {
    name: CommitMessageInput.TITLE,
    type: 'input',
  },
  {
    name: CommitMessageInput.BODY,
    type: 'input',
  },
];
