import generateAliasResolver from 'esm-module-alias';

const aliases = {
  types: 'dist/types',
};
export const resolve = generateAliasResolver(aliases);
