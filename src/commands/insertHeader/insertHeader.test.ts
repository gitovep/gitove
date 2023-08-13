import { insertHeader } from './insertHeader';

// type CommitMessage = {
//   type: string | undefined; // 커밋 종류
//   scope: string | undefined; // 커밋 도메인
//   title: string; // 커밋 제목
//   body: string | undefined; // 커밋 내용
// };

describe('insertHeader', () => {
  it('have to return string type', () => {
    const commitMessage: CommitMessage = {
      type: 'dd',
      scope: 'dd',
      title: 'dd',
      body: 'dd',
    };

    const result: string = insertHeader(commitMessage);

    expect(typeof result).toEqual('string');
  });
  it('have to convert type and scope based on the corresponding settings', () => {});

  it('have to work even when type or scope is not defined', () => {});
});
