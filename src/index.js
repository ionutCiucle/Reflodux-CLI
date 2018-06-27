import minimist from 'minimist';
import router from './router';

const processArgs = minimist(process.argv.slice(2));

const run = () => {
  router(processArgs);
};

run();