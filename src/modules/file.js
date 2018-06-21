const fs = require('fs');
const { getActionTypes, getActions, getFileStub } = require('./template-manager');
const { ACTION_TYPES_FLAG, GLOBAL_ACTION_TYPE_FLAG } = require('../constants');
const { hasCommentFlag } = require('../util');

const addActionTypesToFile = (actionName, filePath) => {
  const fileRows = fs.readFileSync(filePath).toString().split('\n');

  for (let i = 0; i < fileRows.length; i++) {
    if (hasCommentFlag(fileRows[i], ACTION_TYPES_FLAG)) {
      fileRows.splice(i + 1, 0, getActionTypes(actionName));
      break;
    }
  }

  fs.writeFileSync(filePath, fileRows.join('\n'));
};

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

const addActionTypesToGlobaAction = (actionName, filePath) => {
  const fileRows = fs.readFileSync(filePath).toString().split('\n');

  for (let i = 0; i < fileRows.length; i++) {
    if (hasCommentFlag(fileRows[i], GLOBAL_ACTION_TYPE_FLAG)) {
      fileRows.splice(i + 2, 0, getActions(actionName));
      break;
    }
  }

  fs.writeFileSync(filePath, fileRows.join('\n'));
};

const addAsyncActionTypesToGlobalAction = (actionName, filePath, content) => {
  const fileRows = fs.readFileSync(filePath).toString().split('\n');

  for (let i = 0; i < fileRows.length; i++) {
    if (hasCommentFlag(fileRows[i], GLOBAL_ACTION_TYPE_FLAG)) {
      fileRows.splice(i + 2, 0, content);
      break;
    }
  }

  fs.writeFileSync(filePath, fileRows.join('\n'));
};

const addTypeFile = (filePath, moduleName) => {
  fs.writeFileSync(filePath, getFileStub(moduleName));
};

const addTypeFile2 = (filePath, content) => {
  fs.writeFileSync(filePath, content);
};

// const files = {
//   addActionTypesToFile(actionName, filePath) {
//     const fileRows = fs.readFileSync(filePath).toString().split('\n');

//     for (let i = 0; i < fileRows.length; i++) {
//       if (fileRows[i].replace(new RegExp(' ', 'g'), '').toLowerCase() === ACTION_TYPES_FLAG) {
//         // console.log('filerow: ', fileRows[i]);
//         fileRows.splice(i + 1, 0, getActionTypes(actionName));
//         break;
//       }
//     }

//     fs.writeFileSync(filePath, fileRows.join('\n'));
//   },

//   addActionTypesToGlobaAction(actionName, filePath) {
//     const fileRows = fs.readFileSync(filePath).toString().split('\n');

//     for (let i = 0; i < fileRows.length; i++) {
//       if (fileRows[i].replace(new RegExp(' ', 'g'), '').toLowerCase() === GLOBAL_ACTION_TYPE_FLAG) {
//         // console.log('filerow: ', fileRows[i]);
//         fileRows.splice(i + 2, 0, getActions(actionName));
//         break;
//       }
//     }

//     fs.writeFileSync(filePath, fileRows.join('\n'));
//   },

//   addTypeFile(filePath, moduleName) {
//     fs.writeFileSync(filePath, getFileStub(moduleName));
//   }
// };

module.exports = {
  addActionTypesToFile,
  addActionTypesToGlobaAction,
  addTypeFile,
  addTypeFile2,
  addAsyncActionTypesToFile,
  addAsyncActionTypesToGlobalAction
};