import { createModule } from './controllers/module-creation';
import { addAsyncAction, addAction } from './controllers/action-addition';

const router = ({ module: moduleName, action: actionName, path = '', async }) => {
  if (moduleName) {
    createModule(moduleName, path);
    return;  
  }

  if (actionName && path) {
    if (async) {
      addAsyncAction(actionName, path);
    } else {
      addAction(actionName, path);
    }
    return;
  }
};

export default router;