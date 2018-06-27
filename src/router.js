import { createModule } from './controllers/module-creation';

const router = ({ module: moduleName }) => {
  if (moduleName) {
    createModule(moduleName);  
  } else {
    console.warn('Unknown route');
  }
};

export default router;