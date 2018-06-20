const fs = require('fs');
const path = require('path');
const { getActionTypes, getActions, getFileStub } = require('./content-manager');

const files = {
  getCurrentDirectoryBase() {
    return path.basename(process.cwd());
  },
  directoryExists(path) {
    try {
      return fs.statSync(path).isDirectory();
    } catch (err) {
      return false;
    }
  },

  addActionTypesToFile(actionName, filePath) {
    const fileRows = fs.readFileSync(filePath).toString().split('\n');

    for (let i = 0; i < fileRows.length; i++) {
      if (fileRows[i].replace(new RegExp(' ', 'g'), '').toLowerCase() === '//actiontypes') {
        console.log('filerow: ', fileRows[i]);
        fileRows.splice(i + 1, 0, getActionTypes(actionName));
        break;
      }
    }

    fs.writeFileSync(filePath, fileRows.join('\n'));
  },

  addActionTypesToGlobaAction(actionName, filePath) {
    const fileRows = fs.readFileSync(filePath).toString().split('\n');

    for (let i = 0; i < fileRows.length; i++) {
      if (fileRows[i].replace(new RegExp(' ', 'g'), '').toLowerCase() === '//globalactiontype') {
        console.log('filerow: ', fileRows[i]);
        fileRows.splice(i + 2, 0, getActions(actionName));
        break;
      }
    }

    fs.writeFileSync(filePath, fileRows.join('\n'));
  },

  addTypeFile(filePath, moduleName) {
    fs.writeFileSync(filePath, getFileStub(moduleName));
  }
}

module.exports = files;