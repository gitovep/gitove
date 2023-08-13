import { insertHeader } from './insertHeader';

// type CommitMessage = {
//   type: string | undefined; // 커밋 종류
//   scope: string | undefined; // 커밋 도메인
//   title: string; // 커밋 제목
//   body: string | undefined; // 커밋 내용
// };

describe('insertHeader', () => {
  it('string을 반환해야 함', () => {
    const commitMessage: CommitMessage = {
      type: 'dd',
      scope: 'dd',
      title: 'dd',
      body: 'dd',
    };

    const result: string = insertHeader(commitMessage);

    expect(typeof result).toEqual('string');
  });
  it('type 또는 scope가 undefined여도 동작해야 함', () => {});

  it('type 또는 scope가 config에 있는 설정대로 잘 변환되어야 함', () => {});
});
