import fs from 'fs-extra';
import path from 'node:path';

async function getTokenRef() {
  const file = path.resolve(process.cwd(), path.join('src', 'ref', 'autogen-token.json'));
  const content = await fs.readFile(file, { encoding: 'utf8' });
  const rawRef = JSON.parse(content);
  const processedRef = rawRef.reduce((acc, entry) => {
    acc[entry.tokenName] = entry;

    return acc;
  }, {});

  return processedRef;
}

export { getTokenRef };
