/**
 * @see https://github.com/ant-design/cssinjs/blob/35f041c7188ab532d9484e0e364df5c0aea37ce1/src/util/css-variables.ts#L1
 */
function rename(token) {
  return `--ant-${token}`
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
    .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
    .toLowerCase();
}

export { rename };
