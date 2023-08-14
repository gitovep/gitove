import generateAliasResolver from 'esm-module-alias';

const aliases = {
  src: 'dist',
};
export const resolve = generateAliasResolver(aliases);
