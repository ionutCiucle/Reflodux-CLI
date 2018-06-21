import minimist from 'minimist';
import  { createModule, addAction } from './routes';

const argv = minimist(process.argv.slice(2));

const run = async () => {
  const { actionName, path: filePath, create, moduleName } = argv;
  
  if (create && moduleName) {
    createModule(moduleName, filePath);
    return;
  }

  addAction(actionName, filePath, true);
};

run();