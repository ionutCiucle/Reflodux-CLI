
// const path = require('path');
const { getTypeFileTemplate } = require('./modules/template/module-types');
const { getAsyncActionTypes, getAsyncActions } = require('./modules/template/async-actions');
const { addTypeFile2, addAsyncActionTypesToFile, addAsyncActionTypesToGlobalAction } = require('./modules/file');

// const cwd = path.basename(process.cwd());

const createModule = (moduleName, path) => {
  addTypeFile2(
    path,
    getTypeFileTemplate(moduleName)
  );
};

const addAction = (actionName, typeFilePath, isAsync = false) => {
  if (isAsync) {
    addAsyncActionTypesToFile(
      actionName,
      typeFilePath,
      getAsyncActionTypes(actionName)  
    );
    addAsyncActionTypesToGlobalAction(
      actionName,
      typeFilePath,
      getAsyncActions(actionName)
    );
  }
  // TODO: add sync action support
};

module.exports = {
  createModule,
  addAction
};