import { camelCase, constantCase } from 'change-case';

const _getAsyncActionCreatorTypes = (actionName) => ([
  `import type { ${actionName}_REQUEST_ACTION,\n`,
  `  ${actionName}_SUCCESS_ACTION,\n`,
  `  ${actionName}_FAILURE_ACTION,\n`,
  `} from './types.js;'\n`
]);

const _getAsyncActionCreatorTemplate = (actionName) => ([
  `export const ${actionName}Request = (): ${constantCase(actionName)}_REQUEST_ACTION => {};\n`,
  `export const ${actionName}Success = (): ${constantCase(actionName)}_SUCCESS_ACTION => {};\n`,
  `export const ${actionName}Failure = (): ${constantCase(actionName)}_FAILURE_ACTION => {};\n`
]);

export const getAsyncActionCreators = (actionName) => _getAsyncActionCreatorTemplate(camelCase(actionName));
export const getAsyncActionCreatorTypes = (actionName) => _getAsyncActionCreatorTypes(constantCase(actionName));