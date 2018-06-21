# Reflodux-CLI
A little CLI application that will generate Redux modules (action / async-action stubs, types, reducer stub and index file), with Flow typings:

create module:
`node index.js --create --moduleName App --path  path/to/type/file/relative/to/project/root/for/now`
* path will be removed when the create module directory feature will be implemented

add async action type:
`node index.js --actionName MY_ACTION --path path/to/type/file/relative/to/project/root/for/now`

File layout:
- modules
  - my-module
    - types.js  
    - actions.js
    - async-actions.js
    - reducer.js
    - index.js
  
