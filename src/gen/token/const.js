/**
 * @see https://github.com/ant-design/ant-design/blob/938a8cf64d5c5f6315846ca634554ce219d79fb6/components/theme/useToken.ts#L30
 */
const ignoreList = [
  'size',
  'sizeSM',
  'sizeLG',
  'sizeMD',
  'sizeXS',
  'sizeXXS',
  'sizeMS',
  'sizeXL',
  'sizeXXL',
  'sizeUnit',
  'sizeStep',
  'motionBase',
  'motionUnit',
];

/**
 * @see https://github.com/ant-design/ant-design/blob/938a8cf64d5c5f6315846ca634554ce219d79fb6/components/theme/useToken.ts#L48
 */
const preservedList = [
  'screenXS',
  'screenXSMin',
  'screenXSMax',
  'screenSM',
  'screenSMMin',
  'screenSMMax',
  'screenMD',
  'screenMDMin',
  'screenMDMax',
  'screenLG',
  'screenLGMin',
  'screenLGMax',
  'screenXL',
  'screenXLMin',
  'screenXLMax',
  'screenXXL',
  'screenXXLMin',
];

/**
 * @see https://github.com/ant-design/ant-design/blob/2af20aaa34bb195b9d2a9132f519328cf78184bd/components/theme/useToken.ts#L12
 */
const unitlessList = [
  'lineHeight',
  'lineHeightSM',
  'lineHeightLG',
  'lineHeightHeading1',
  'lineHeightHeading2',
  'lineHeightHeading3',
  'lineHeightHeading4',
  'lineHeightHeading5',
  'opacityLoading',
  'fontWeightStrong',
  'zIndexPopupBase',
  'zIndexBase',
  'opacityImage',
];

export { ignoreList, preservedList, unitlessList };
