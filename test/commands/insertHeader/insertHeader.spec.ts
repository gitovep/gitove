import { insertHeader } from 'src/commands/insertHeader';

describe('insertHeader', () => {
  it('have to return string type', () => {
    const commitMessage: CommitMessage = {
      type: 'feat',
      scope: 'config',
      title: 'insertHeader',
      body: 'create insertHeader method',
    };

    const result: string = insertHeader(commitMessage);

    expect(typeof result).toEqual('string');
  });
  it('have to convert type and scope based on the corresponding configuration', () => {
    const matchedCommitMessage: CommitMessage = {
      type: 'feat',
      scope: 'config',
      title: 'insertHeader',
      body: 'create insertHeader method',
    };

    const matchedCommitMessageResult: string = insertHeader(matchedCommitMessage);
    expect(matchedCommitMessageResult).toContain('[feat:]');
  });

  it('have to throw error if input type or scope is string but corresponding configuration cannot be found', () => {
    const unmatchedTypeMessage: CommitMessage = {
      type: 'feature',
      scope: 'config',
      title: 'insertHeader',
      body: 'create insertHeader method',
    };

    const unmatchedScopeMessage: CommitMessage = {
      type: 'feat',
      scope: 'configure',
      title: 'insertHeader',
      body: 'create insertHeader method',
    };

    expect(() => {
      insertHeader(unmatchedTypeMessage);
    }).toThrow('cannot find corresponding commit type');

    expect(() => {
      insertHeader(unmatchedScopeMessage);
    }).toThrow('cannot find corresponding commit scope');
  });

  it('have to work even when type or scope is not defined', () => {
    const commitMessage: CommitMessage = {
      type: undefined,
      scope: undefined,
      title: 'insertHeader',
      body: 'create insertHeader method',
    };

    const result: string = insertHeader(commitMessage);
    expect(typeof result).toEqual('string');
    expect(result).toEqual(commitMessage.title);
  });
});
