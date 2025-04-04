import { theme } from 'antd';
import fs from 'fs-extra';
import path from 'node:path';
import { applyUnit } from './apply-unit.js';
import { filter } from './filter.js';
import { rename } from './rename.js';

await genReference();

async function genReference() {
  //
  const token = theme.getDesignToken();
  const filteredTokens = filter(token);
  const refTable = filteredTokens.map(({ tokenName, unitlessValue }) => {
    const varName = rename(tokenName);
    const valueInUnit = applyUnit(tokenName, unitlessValue);

    return { tokenName, varName, unitlessValue, valueInUnit };
  });

  //
  const outputPath = path.resolve(process.cwd(), path.join('src', 'ref', 'autogen-token.json'));

  await fs.ensureFile(outputPath);
  await fs.writeFile(outputPath, JSON.stringify(refTable, null, 2));
}
