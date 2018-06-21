const argv = require('minimist')(process.argv.slice(2));
const { createModule, addAction } = require('./src/routes');

const run = async () => {
  const { actionName, path: filePath, create, moduleName } = argv;
  
  if (create && moduleName) {
    createModule(moduleName, filePath);
    return;
  }

  addAction(actionName, filePath, true);
};

run();