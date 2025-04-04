import { ignoreList, preservedList } from './const.js';

/**
 * Filter out tokens in the ignoreList or preservedList.
 * @See https://github.com/ant-design/cssinjs/blob/35f041c7188ab532d9484e0e364df5c0aea37ce1/src/util/css-variables.ts#L55
 */
function filter(token) {
  const blacklistSet = new Set([...ignoreList, ...preservedList]);

  return Object.entries(token)
    .filter(([name, value]) => {
      if (blacklistSet.has(name)) return false;
      if (!checkIsNumOrStr(value)) return false;

      return true;
    })
    .map(([name, value]) => ({ tokenName: name, unitlessValue: value }));
}

function checkIsNumOrStr(i) {
  if (typeof i === 'number') return true;
  if (typeof i === 'string') return true;

  return false;
}

export { filter };
