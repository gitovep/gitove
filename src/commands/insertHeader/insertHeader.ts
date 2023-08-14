import { DEFAULT_CONFIG } from '../../config/defaultConfig';

// Convert commit type using configuration file
const convertCommitType = (type: string | undefined): string => {
  if (!type) {
    return '';
  }

  const findTypeResult = DEFAULT_CONFIG.type.find((t) => t.alias === type);
  if (!findTypeResult) {
    throw new Error('cannot find corresponding commit type in configuration file');
  }

  return `[${findTypeResult.name}]`;
};

// Convert commit scope using configuration file
const convertCommitScope = (scope: string | undefined): string => {
  if (!scope) {
    return '';
  }

  const finScopeResult = DEFAULT_CONFIG.scope.find((t) => t.alias === scope);
  if (!finScopeResult) {
    throw new Error('cannot find corresponding commit scope in configuration file');
  }

  return `[${finScopeResult.name}]`;
};

const insertHeader = (commitMessage: CommitMessage): string => {
  const { title } = commitMessage;
  // Convert commit type
  const convertedType = convertCommitType(commitMessage.type);
  // Convert commit scope
  const convertedScope = convertCommitScope(commitMessage.scope);

  // Combine the transformed header with the title and return the title
  // ex : [type][scope]title
  return convertedType + convertedScope + title;
};

export { insertHeader };
