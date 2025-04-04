import fs from 'fs-extra';
import path from 'node:path';

async function genTheme() {
  //
  const file = path.resolve(process.cwd(), path.join('src', 'ref', 'handmade-theme.json'));
  const content = await fs.readFile(file, { encoding: 'utf8' });
  const themeRef = JSON.parse(content);

  //
  const cssSheet = Object.entries(themeRef)
    .map(([prefix, tokenNames]) => {
      const cssDecls = tokenNames.map(name => `--${prefix}-${name}: '';`);
      const cssRule = `@theme {${cssDecls.join('')}}`;

      return cssRule;
    })
    .join('');

  //
  const outputPath = path.resolve(process.cwd(), path.join('src', 'css', 'theme.css'));

  await fs.ensureFile(outputPath);
  await fs.writeFile(outputPath, cssSheet);
}

export { genTheme };
