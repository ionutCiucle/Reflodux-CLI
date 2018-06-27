import { createModule } from './controllers/module-creation';
import { addAsyncAction } from './controllers/action-addition';

const router = ({ module: moduleName, action: actionName, path: filePath, async }) => {
  if (moduleName) {
    createModule(moduleName);
    return;  
  }

  if (actionName && filePath) {
    if (async) {
      addAsyncAction(actionName, filePath);
    } else {
      // create regular action
    }
    return;
  }
};

export default router;