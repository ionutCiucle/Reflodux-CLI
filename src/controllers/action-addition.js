import path from 'path';
import { injectTextInFileAfterFlag } from '../util';
import { ACTION_TYPES_FLAG, MODULE_ACTION_TYPE } from '../constants';
import { getAsyncActions, getAsyncActionTypes } from '../templates/async-action-type';
import { getActionType, getActionReturnType } from '../templates/action-type';

export const addAction = (actionName, actionFilePath) => {
  const filePath = path.join(process.cwd(), actionFilePath);
  
  injectTextInFileAfterFlag({
    filePath,
    flag: ACTION_TYPES_FLAG,
    content: getActionType(actionName)
  });
  injectTextInFileAfterFlag({
    filePath,
    flag: MODULE_ACTION_TYPE,
    content: getActionReturnType(actionName),
    flagIndexOffset: 2
  });
};

export const addAsyncAction = (actionName, actionFilePath) => {
  injectTextInFileAfterFlag({
    actionFilePath,
    flag: ACTION_TYPES_FLAG,
    content: getAsyncActionTypes(actionName)
  });
  injectTextInFileAfterFlag({
    actionFilePath,
    flag: MODULE_ACTION_TYPE,
    content: getAsyncActions(actionName),
    flagIndexOffset: 2
  });
};