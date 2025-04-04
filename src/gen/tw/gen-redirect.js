import fs from 'fs-extra';
import path from 'node:path';
import { getTokenRef } from './get-token-ref.js';

async function genRedirect() {
  //
  const file = path.resolve(process.cwd(), path.join('src', 'ref', 'handmade-theme.json'));
  const content = await fs.readFile(file, { encoding: 'utf8' });
  const themeRef = JSON.parse(content);
  const tokenRef = await getTokenRef();

  //
  const cssDecls = Object.entries(themeRef)
    .map(([prefix, tokenNames]) =>
      tokenNames.map(name => {
        const varName = tokenRef[name].varName;
        const decl = `--${prefix}-${name}: var(${varName});`;

        return decl;
      }),
    )
    .flat();
  const cssSheet = `* {${cssDecls.join('')}}`;

  //
  const outputPath = path.resolve(process.cwd(), path.join('src', 'css', 'redirect.css'));

  await fs.ensureFile(outputPath);
  await fs.writeFile(outputPath, cssSheet);
}

export { genRedirect };
