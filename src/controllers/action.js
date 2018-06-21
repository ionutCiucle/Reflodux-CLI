
import { injectTextInFileAfterFlag } from '../modules/file';
import { ACTION_TYPES_FLAG, MODULE_ACTION_TYPE } from '../constants';
import { getAsyncActionTypes, getAsyncActions } from '../modules/template/async-actions';

export const addAsyncAction = (actionName, filePath) => {
  injectTextInFileAfterFlag({
    filePath,
    flag: ACTION_TYPES_FLAG,
    content: getAsyncActionTypes(actionName)
  });
  injectTextInFileAfterFlag({
    filePath,
    flag: MODULE_ACTION_TYPE,
    content: getAsyncActions(actionName),
    flagIndexOffset: 2
  });
};
