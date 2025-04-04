import { unitlessList } from './const.js';

/**
 * @see https://github.com/ant-design/cssinjs/blob/35f041c7188ab532d9484e0e364df5c0aea37ce1/src/util/css-variables.ts#L64
 */
function applyUnit(name, value) {
  if (typeof value === 'string') return value;
  if (unitlessList.includes(name)) return String(value);

  return value + 'px';
}

export { applyUnit };
