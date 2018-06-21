const argv = require('minimist')(process.argv.slice(2));
const { createModule, addAction } = require('./src/routes');

// const { 
//   addActionTypesToFile, 
//   addActionTypesToGlobaAction,
//   addTypeFile
// } = require('./modules/file-manager');

const run = async () => {
  const { actionName, path: filePath, create, moduleName, _ } = argv;
  
  if (create && moduleName) {
    // addTypeFile(filePath, moduleName);
    createModule(moduleName, filePath);
    return;
  }

  addAction(actionName, filePath, true);
  
  // addActionTypesToFile(actionName, filePath);
  // addActionTypesToGlobaAction(actionName, filePath);
};

run();