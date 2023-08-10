import { join } from 'node:path';
import moduleAlias from 'module-alias';

const DIST_PATH = join(__dirname, '..', 'types');
console.log(DIST_PATH);

moduleAlias.addAliases({
  types: DIST_PATH,
});
