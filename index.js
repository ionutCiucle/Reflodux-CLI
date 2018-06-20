const argv = require('minimist')(process.argv.slice(2));
const fs = require('fs');

const { 
  addActionTypesToFile, 
  addActionTypesToGlobaAction,
  addTypeFile
} = require('./modules/file-writer');

async function run() {
  const { actionName, path: filePath, create, moduleName } = argv;
  
  if (create && moduleName) {
    addTypeFile(filePath, moduleName);
  }
  
  addActionTypesToFile(actionName, filePath);
  addActionTypesToGlobaAction(actionName, filePath);
}

run();