import { join } from 'node:path';
import moduleAlias from 'module-alias';

const DIST_PATH = join(__dirname, '..', 'types');

moduleAlias.addAliases({
  types: DIST_PATH,
});
