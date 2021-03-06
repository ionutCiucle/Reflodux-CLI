import {  pascalCase, camelCase } from 'change-case';

const _getStoreActionTypes = (moduleName) => ([
  `type GetState = () => { ${camelCase(moduleName)}: ${moduleName}State };\n`,
  `type PromiseAction = Promise<${moduleName}Action>;\n`,
  `export type Dispatch = (action: ${moduleName}Action | ThunkAction | PromiseAction | Array<${moduleName}Action>) => any;\n`,
  `export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;`
]);

const _getModuleTypeFileTemplate = (moduleName) => ([
  '//@flow \n',
  `export type ${moduleName}State = {}; \n\n`,
  '// Action Types \n',
  '// Module Action Type \n',
  `export type ${moduleName}Action = \n\n`
]);

export const getTypeFileTemplate = (moduleName) => {
  return (
    _getModuleTypeFileTemplate(pascalCase(moduleName))
      .concat(
        _getStoreActionTypes(pascalCase(moduleName))
      ).join('')
  );
};