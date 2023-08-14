import generateAliasResolver from 'esm-module-alias';

const aliases = {
  src: 'lib',
};
export const resolve = generateAliasResolver(aliases);
