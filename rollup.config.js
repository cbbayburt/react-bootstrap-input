import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import {uglify} from 'rollup-plugin-uglify';
import pkg from './package.json';

const name = 'Input';
const path = 'dist/react-bootstrap-input';
const globals = {
  'react': 'React'
};
const external = Object.keys(globals);
const babelOpts = (production) => {
  const result = {
    babelrc: false,
    presets: [['env', { modules: false }], 'stage-0', 'react'],
    plugins: ['external-helpers']
  };

  return result;
};

export default [
  {
    input: 'src/index.js',
    output: {
      file: pkg.module,
      format: 'es'
    },
    external,
    plugins: [babel(babelOpts(false))]
  },
  {
    input: 'src/index.js',
    output: {
      name,
      file: path + '.js',
      format: 'umd',
      exports: 'named',
      globals
    },
    external,
    plugins: [babel(babelOpts(false)), resolve()]
  },
  {
    input: 'src/index.js',
    output: {
      name,
      file: path + '.min.js',
      format: 'umd',
      exports: 'named',
      globals
    },
    external,
    plugins: [babel(babelOpts(true)), resolve(), uglify()]
  },
];
