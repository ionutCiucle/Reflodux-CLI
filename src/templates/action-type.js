
import { constantCase } from 'change-case';

export const getActionType = (actionName) => ([
  `export const ${constantCase(actionName)}: '${constantCase(actionName)}' = '${constantCase(actionName)}';\n`,
  `export type ${constantCase(actionName)}_ACTION = { type: typeof ${constantCase(actionName)} };\n`
].join(''));

export const getActionReturnType = (actionName) => (
  `  | ${constantCase(actionName)}_ACTION\n`
);