const fs = require('fs');
const { ACTION_TYPES_FLAG, MODULE_ACTION_TYPE } = require('../constants');
const { hasCommentFlag } = require('../util');

const addAsyncActionTypesToFile = (actionName, filePath, content) => {
  const fileRows = fs.readFileSync(filePath).toString().split('\n');

  for (let i = 0; i < fileRows.length; i++) {
    if (hasCommentFlag(fileRows[i], ACTION_TYPES_FLAG)) {
      fileRows.splice(i + 1, 0, content);
      break;
    }
  }

  fs.writeFileSync(filePath, fileRows.join('\n'));
};

const addAsyncActionTypesToGlobalAction = (actionName, filePath, content) => {
  const fileRows = fs.readFileSync(filePath).toString().split('\n');

  for (let i = 0; i < fileRows.length; i++) {
    if (hasCommentFlag(fileRows[i], MODULE_ACTION_TYPE)) {
      fileRows.splice(i + 2, 0, content);
      break;
    }
  }

  fs.writeFileSync(filePath, fileRows.join('\n'));
};

const addTypeFile = (filePath, content) => {
  fs.writeFileSync(filePath, content);
};

module.exports = {
  addTypeFile,
  addAsyncActionTypesToFile,
  addAsyncActionTypesToGlobalAction
};