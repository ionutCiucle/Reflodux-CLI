import { pascal } from 'change-case';

const _getReducerTemplate = (moduleName) => ([
  `import type { ${pascal(moduleName)}State } from './types;'\n\n`,
  `const initialState: ${pascal(moduleName)}State = {}\n`,
  `export default const ${moduleName} = (state: ${pascal(moduleName)}State = initialState, action: ${pascal(moduleName)}Action)`
]);

export const getReducer = (moduleName) => _getReducerTemplate(moduleName);