import fs from 'fs';
import { ACTION_TYPES_FLAG, MODULE_ACTION_TYPE } from '../constants';
import { hasCommentFlag } from '../util';

export const addAsyncActionTypesToFile = (actionName, filePath, content) => {
  const fileRows = fs.readFileSync(filePath).toString().split('\n');

  for (let i = 0; i < fileRows.length; i++) {
    if (hasCommentFlag(fileRows[i], ACTION_TYPES_FLAG)) {
      fileRows.splice(i + 1, 0, content);
      break;
    }
  }

  fs.writeFileSync(filePath, fileRows.join('\n'));
};

export const addAsyncActionTypesToGlobalAction = (actionName, filePath, content) => {
  const fileRows = fs.readFileSync(filePath).toString().split('\n');

  for (let i = 0; i < fileRows.length; i++) {
    if (hasCommentFlag(fileRows[i], MODULE_ACTION_TYPE)) {
      fileRows.splice(i + 2, 0, content);
      break;
    }
  }

  fs.writeFileSync(filePath, fileRows.join('\n'));
};

export const injectTextInFileAfterFlag = ({ filePath, flag, content, flagIndexOffset = 1 }) => {
  const fileRows = fs.readFileSync(filePath).toString().split('\n');

  for (let i = 0; i < fileRows.length; i++) {
    if (hasCommentFlag(fileRows[i], flag)) {
      fileRows.splice(i + flagIndexOffset, 0, content);
      break;
    }
  }

  fs.writeFileSync(filePath, fileRows.join('\n'));
};

export const addTypeFile = (filePath, content) => {
  fs.writeFileSync(filePath, content);
};