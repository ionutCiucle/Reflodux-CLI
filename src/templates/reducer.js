import { pascal } from 'change-case';

const _getReducerTemplate = (moduleName) => ([
  `import type { ${pascal(moduleName)}State } from './types;'\n\n`,
  `const initialState: ${pascal(moduleName)}State = {};\n\n`,
  `export default const ${moduleName} = (state: ${pascal(moduleName)}State = initialState, action: ${pascal(moduleName)}Action): ${moduleName}State => {\n`,
  `  switch(action.type) {\n`,
  `    default: return state;\n`,
  `  }\n`,
  `}`
]);

export const getReducerFileTemplate = (moduleName) => _getReducerTemplate(moduleName);