# Reflodux-CLI
## _A little CLI application that will generate Redux modules (action / async-action stubs, types, reducer stub and index file), with Flow typings:_

### Create module:
```
node index.js --create --moduleName App --path  path/to/type/file/relative/to/project/root/for/now
```
 
 _path param will be removed when the create module directory feature will be implemented_

### Add async action type:
```
node index.js --actionName MY_ACTION --path path/to/type/file/relative/to/project/root/for/now
```

_support for sync action types will be added soon_

_support for generating async action & regular action creators will be added soon_

#### Module layout:
```
- modules
  - my-module
    - types.js  
    - actions.js
    - async-actions.js
    - reducer.js
    - index.js
```
