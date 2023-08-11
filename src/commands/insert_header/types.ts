export type CommitMessage = {
  type: string | undefined; // 커밋 종류
  scope: string | undefined; // 커밋 도메인
  title: string; // 커밋 제목
  body: string | undefined; // 커밋 내용
};

export type Emoji = {
  emoji: string;
  code: string;
  description: string;
  name: string;
};
