import path from 'path';
import fs from 'fs';
import { paramCase } from 'change-case';
import { addIndexFile, addTypeFile, addActionFile, addAsyncActionFile, addReducerFile } from './file-creation';

export const createModule = (moduleName) => {
  const modulePath = path.join(process.cwd(), paramCase(moduleName));

  if (!fs.existsSync(modulePath)) {
    fs.mkdirSync(modulePath);
    
    addIndexFile(modulePath, moduleName);
    addTypeFile(modulePath, moduleName);
    addActionFile(modulePath);
    addAsyncActionFile(modulePath);
    addReducerFile(modulePath, moduleName);
  } else {
    console.warn('Module exists...');
  }
};