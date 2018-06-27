import { camelCase, constantCase } from 'change-case';
 
export const getActionCreatorType = (actionName) => (
  `import type { ${constantCase(actionName)}_ACTION } from './types';\n`
);

export const getActionCreator = (actionName) => ([
  `export const ${camelCase(actionName)} = (): ${constantCase(actionName)}_ACTION => {;\n`,
  `  return { type: ${constantCase}_ACTION };\n`,
  `}\n`
]);