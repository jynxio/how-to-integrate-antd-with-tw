import { genRedirect } from './gen-redirect.js';
import { genTheme } from './gen-theme.js';
import { genUtility } from './gen-utility.js';

await Promise.all([genTheme(), genUtility(), genRedirect()]);
