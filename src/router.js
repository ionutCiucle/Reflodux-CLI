import { createModule } from './controllers/module-creation';
import { addAsyncAction, addAction } from './controllers/action-addition';

const router = ({ module: moduleName, action: actionName, path: filePath, async }) => {
  if (moduleName) {
    createModule(moduleName);
    return;  
  }

  if (actionName && filePath) {
    if (async) {
      addAsyncAction(actionName, filePath);
    } else {
      addAction(actionName, filePath);
    }
    return;
  }
};

export default router;