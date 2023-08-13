export const CommitMessageInput = {
  TYPE: 'type',
  SCOPE: 'scope',
  TITLE: 'title',
  BODY: 'body',
} as const;

declare global {
  type CommitHeaderType = 'type' | 'scope';

  type CommitMessageInput = typeof CommitMessageInput[keyof typeof CommitMessageInput];

  type CommitMessageAnswers = Record<CommitMessageInput, string | undefined>;

  type CommitMessage = {
    type: string | undefined; // 커밋 종류
    scope: string | undefined; // 커밋 도메인
    title: string; // 커밋 제목
    body: string | undefined; // 커밋 내용
  };

}
