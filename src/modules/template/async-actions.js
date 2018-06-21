export const _getAsyncActionTypeTemplate = (actionName) => ([
  `export const ${actionName}_REQUEST: '${actionName}_REQUEST' = '${actionName}_REQUEST';\n`,
  `export const ${actionName}_SUCCESS: '${actionName}_SUCCESS' = '${actionName}_SUCCESS';\n`,
  `export const ${actionName}_FAILURE: '${actionName}_FAILURE' = '${actionName}_FAILURE';\n`,
  `export type ${actionName}_REQUEST_ACTION = { type: typeof ${actionName}_REQUEST };\n`,
  `export type ${actionName}_SUCCESS_ACTION = { type: typeof ${actionName}_SUCCESS };\n`,
  `export type ${actionName}_FAILURE_ACTION = { type: typeof ${actionName}_SUCCESS, error: Object };\n`
]);

export const _getAsyncActionTemplate = (actionName) => ([
  `  | ${actionName}_REQUEST_ACTION\n`,
  `  | ${actionName}_SUCCESS_ACTION\n`,
  `  | ${actionName}_FAILURE_ACTION\n`
]);

export const getAsyncActionTypes = (actionName) => ( 
  _getAsyncActionTypeTemplate(actionName).join('') 
);

export const getAsyncActions = (actionName) => (
  _getAsyncActionTemplate(actionName).join('')
);
