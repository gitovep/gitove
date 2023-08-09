export const CommitMessageInput = {
  TYPE: 'type',
  SCOPE: 'scope',
  TITLE: 'title',
  BODY: 'body',
} as const;

declare global {
  type CommitMessageInput = typeof CommitMessageInput[keyof typeof CommitMessageInput];
}
