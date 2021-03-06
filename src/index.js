import minimist from 'minimist';
import router from './router';

const argv = minimist(process.argv.slice(2));

const run = () => {
  const { module } = argv;
  
  router({ module });
};

run();