export {};

declare global {
  type ConfigurationKeys = 'type' | 'scope' | 'replace';

  type Configuration = Record<ConfigurationKeys, KeywordConfig[]>;

  type CustomCommitConfig = {
    name: string;
    alias: string;
    description: string;
  };

  type CustomEmojiConfig = CustomCommitConfig & {
    emoji: string;
  };

  type KeywordConfig = CustomCommitConfig | CustomEmojiConfig;
}
