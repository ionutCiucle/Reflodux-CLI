import { camelCase } from 'change-case';

const _getIndexTemplate = (moduleName) => ([
  `import ${camelCase(moduleName)}Reducer from './reducer';\n`,
  `export * from './actions';\n`,
  `export * from './async-actions';\n`,
  `export * from './types';\n\n`,
  `export default ${camelCase(moduleName)}Reducer;`
]);

export const getIndexTemplateFile = (moduleName) => _getIndexTemplate(moduleName).join(''); 