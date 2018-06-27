# Reflodux-CLI
## _A little CLI application that will help with the not-so-fun, repetitive tasks of working with React, Redux and Flow:_

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

### Start `webpack`, in order to build app
```
npm start
```

### Create module (in current working directory, will have added optional `path` param):
```
node ./dist/main.js --module moduleName
```

### Add action type (add `async` param for creating an async action):
```
node ./dist/main.js --action actionName --path some/path/relative/to/cwd [--async]
```
_1. async support will be added soon;_

_2. support for generating async action & regular action creators will be added soon._


### Next: Create functional / stateful React Component stubs
