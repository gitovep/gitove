import { insertHeader } from 'src/commands/insertHeader';

describe('insertHeader', () => {
  it('have to return string type', () => {
    const commitMessage: CommitMessage = {
      type: 'feat',
      scope: 'header',
      title: 'insertHeader',
      body: 'create insertHeader method',
    };

    const result: string = insertHeader(commitMessage);

    expect(typeof result).toEqual('string');
  });
  it('have to convert type and scope based on the corresponding settings', () => {
    const matchedCommitMessage: CommitMessage = {
      type: 'feat',
      scope: 'header',
      title: 'insertHeader',
      body: 'create insertHeader method',
    };

    const unmatchedCommitMessage: CommitMessage = {
      type: 'feature',
      scope: 'header',
      title: 'insertHeader',
      body: 'create insertHeader method',
    };

    const matchedCommitMessageResult: string = insertHeader(matchedCommitMessage);
    const unmatchedCommitMessageResult : string = insertHeader(unmatchedCommitMessage);
    expect(matchedCommitMessageResult).toContain('[feat:]');
    expect(unmatchedCommitMessageResult).not.toContain('[feat:]');
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
