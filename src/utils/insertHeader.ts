import { DEFAULT_CONFIG } from 'src/config/defaultConfig';
import { CommitMessageInput } from 'src/types';

// Convert commit type using configuration file
const convertCommitType = (type: string | undefined): string => {
  if (type === undefined) {
    throw new Error('Commit type cannot be undefined');
  }

  const findTypeResult = DEFAULT_CONFIG.type.find((t) => t.alias === type);
  if (!findTypeResult) {
    throw new Error('cannot find corresponding commit type in configuration file');
  }

  return findTypeResult.name;
};

// Convert commit scope using configuration file
const convertCommitScope = (scope: string | undefined): string => {
  if (scope === undefined) {
    return '';
  }

  const finScopeResult = DEFAULT_CONFIG.scope.find((s) => s.alias === scope);
  if (!finScopeResult) {
    throw new Error('cannot find corresponding commit scope in configuration file');
  }

  return finScopeResult.name;
};

const formatCommitMessage = (type: string, scope: string, title: string) => {
  return `${type}(${scope}): ${title}`;
};

export const insertHeader = (commitMessage: CommitMessage): string => {
  // Convert commit type
  const commitType = commitMessage.get(CommitMessageInput.TYPE);
  const convertedType = convertCommitType(commitType);
  // Convert commit scope
  const commitScope = commitMessage.get(CommitMessageInput.SCOPE);
  const convertedScope = convertCommitScope(commitScope);

  // Combine the transformed header with the title and return the title
  // ex : type(scope): Title
  const title = commitMessage.get(CommitMessageInput.TITLE);
  return formatCommitMessage(convertedType, convertedScope, title!);
};
