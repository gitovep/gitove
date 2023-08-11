export {};

declare global {
  type CustomCommitConfig = {
    name: string;
    alias: string;
    description: string;
  };

  type CustomEmojiConfig = CustomCommitConfig & {
    emoji: string;
  };
}
