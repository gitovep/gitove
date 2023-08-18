import { getConfigfile } from '../config/getConfigfile';

const configuration: Configuration = getConfigfile();

export const getValueFromConfig = (configurationKey: ConfigurationKeys)
: KeywordConfig[] => {
  return configuration[configurationKey];
};
