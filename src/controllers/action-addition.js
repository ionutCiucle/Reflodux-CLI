import { injectTextInFileAfterFlag } from '../util';
import { ACTION_TYPES_FLAG, MODULE_ACTION_TYPE } from '../constants';
import { getAsyncActions, getAsyncActionTypes } from '../templates/async-action-type';

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

export const addAction = () => {};