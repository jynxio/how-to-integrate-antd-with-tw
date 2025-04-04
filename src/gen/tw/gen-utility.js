import fs from 'fs-extra';
import path from 'node:path';
import { getTokenRef } from './get-token-ref.js';

async function genUtility() {
  //
  const file = path.resolve(process.cwd(), path.join('src', 'ref', 'handmade-utility.json'));
  const content = await fs.readFile(file, { encoding: 'utf8' });
  const utilityRef = JSON.parse(content);
  const tokenRef = await getTokenRef();

  //
  const cssSheet = Object.entries(utilityRef)
    .map(entry => {
      const [prefix, { propName, tokenNames }] = entry;
      const cssRules = tokenNames
        .map(name => {
          const selector = prefix + '-' + name;
          const varName = tokenRef[name].varName;
          const rule = `@utility ${selector} { ${propName}: var(${varName}); }`;

          return rule;
        })
        .join('');

      return cssRules;
    })
    .join('');

  //
  const outputPath = path.resolve(process.cwd(), path.join('src', 'css', 'utility.css'));

  await fs.ensureFile(outputPath);
  await fs.writeFile(outputPath, cssSheet);
}

export { genUtility };
