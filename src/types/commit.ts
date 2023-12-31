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

  type CommitMessage = Map<CommitMessageInput, string | undefined>;

}
