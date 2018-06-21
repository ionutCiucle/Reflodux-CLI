
import { getTypeFileTemplate } from './modules/template/module-types';
import { addTypeFile } from './modules/file';
import { addAsyncAction } from './controllers/action';
// const cwd = path.basename(process.cwd());

export const createModule = (moduleName, path) => {
  // TODO: move this section in actions controller
  addTypeFile(
    path,
    getTypeFileTemplate(moduleName)
  );
};

export const addAction = (actionName, typeFilePath, isAsync = false) => {
  if (isAsync) {
    addAsyncAction(actionName, typeFilePath);
  }
  // TODO: add sync action support
};