import { insertHeader } from 'src/utils';
import { CommitMessageInput } from 'src/types';
import { DEFAULT_CONFIG } from 'src/config/defaultConfig';

describe('insertHeader', () => {
  const commitMessage: CommitMessage = new Map();
  commitMessage.set(CommitMessageInput.TYPE, 'feat');
  commitMessage.set(CommitMessageInput.SCOPE, 'config');
  commitMessage.set(CommitMessageInput.TITLE, 'insertHeader');
  commitMessage.set(CommitMessageInput.BODY, 'create insertHeader method');

  it('have to return string type', () => {
    const result: string = insertHeader(commitMessage);

    expect(typeof result).toEqual('string');
  });
  it('have to convert type and scope based on the corresponding configuration', () => {
    const matchedCommitMessageResult: string = insertHeader(commitMessage);
    const keyword = DEFAULT_CONFIG.type.find((t) => t.alias === 'feat');

    expect(matchedCommitMessageResult).toContain(keyword?.name);
  });

  it('have to throw error if input type or scope is string but corresponding configuration cannot be found', () => {
    const unmatchedTypeMessage: CommitMessage = new Map(commitMessage);
    unmatchedTypeMessage.set(CommitMessageInput.TYPE, 'feature');

    const unmatchedScopeMessage: CommitMessage = new Map(commitMessage);
    unmatchedScopeMessage.set(CommitMessageInput.SCOPE, 'configure');

    expect(() => {
      insertHeader(unmatchedTypeMessage);
    }).toThrow('cannot find corresponding commit type in configuration file');

    expect(() => {
      insertHeader(unmatchedScopeMessage);
    }).toThrow('cannot find corresponding commit scope in configuration file');
  });

  it('have to work even when type or scope is not defined', () => {
    const commitMessageWithoutType: CommitMessage = new Map(commitMessage);
    commitMessageWithoutType.delete(CommitMessageInput.TYPE);

    const result: string = insertHeader(commitMessage);
    expect(typeof result).toEqual('string');
    expect(result).toEqual('feat(Config): InsertHeader');
  });
});
