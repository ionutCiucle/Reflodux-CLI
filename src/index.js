import minimist from 'minimist';
// import  { createModule, addAction } from './routes';
import router from './router';

const argv = minimist(process.argv.slice(2));

const run = async () => {
  // const { actionName, path: filePath, create, module } = argv;
  const { module } = argv;
  
  router({ module });

  // if (create && moduleName) {
  //   createModule(moduleName, filePath);
  //   return;
  // }

  // addAction(actionName, filePath, true);
};

run();