export const ConfigurationKeys = {
  TYPE: 'type',
  SCOPE: 'scope',
  REPLACE: 'replace',
} as const;

declare global {
  type ConfigurationKeys = typeof ConfigurationKeys[keyof typeof ConfigurationKeys];

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
