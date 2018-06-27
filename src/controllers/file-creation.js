import fs from 'fs';
import path from 'path';
import { getIndexTemplateFile } from '../templates/index-file';
import { getTypeFileTemplate } from '../templates/module-types';
import { getReducerFileTemplate } from '../templates/reducer';

export const addIndexFile = (modulePath, moduleName) => {
  const indexPath = path.join(modulePath, 'index.js');

  fs.writeFileSync(indexPath, getIndexTemplateFile(moduleName));
};

export const addTypeFile = (modulePath, moduleName) => {
  const typesPath = path.join(modulePath, 'types.js');
  const moduleFileTemplate = getTypeFileTemplate(moduleName);

  fs.writeFileSync(typesPath, moduleFileTemplate);
};

export const addActionFile = (modulePath) => {
  const actionsPath = path.join(modulePath, 'actions.js');
  
  fs.writeFileSync(actionsPath, '');
};

export const addAsyncActionFile = (modulePath) => {
  const asyncActionsPath = path.join(modulePath, 'async-actions.js');

  fs.writeFileSync(asyncActionsPath, '');
};

export const addReducerFile = (modulePath, moduleName) => {
  const reducerPath = path.join(modulePath, 'reducer.js');

  fs.writeFileSync(reducerPath, getReducerFileTemplate(moduleName));
};

export const addReducer = () => {};