import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import moduleAlias from 'module-alias';

const DIRNAME = dirname(fileURLToPath(import.meta.url));
const DIST_PATH = join(DIRNAME, '..', 'types');

moduleAlias.addAliases({
  types: DIST_PATH,
});
