import { constantCase } from 'change-case';

export const getActionType = (actionName) => (
  `export const ${constantCase(actionName)}: ${constantCase(actionName)} = '${constantCase(actionName)}'\n`
);

export const getAction = (actionName) => (
  `export const ${constantCase(actionName)}_ACTION\n`
);

