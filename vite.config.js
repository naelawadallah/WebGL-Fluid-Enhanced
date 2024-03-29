import { name } from './package.json';
import { resolve } from 'path';

export default () => {
  return {
    build: {
      lib: {
        name,
        entry: resolve(__dirname, 'src/index.js'),
      },
      rollupOptions: {
        output: {
          globals: {
            [name]: name,
          },
        },
      },
    },
  };
};
