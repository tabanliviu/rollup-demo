import babel from 'rollup-plugin-babel';

export default {
  entry: './src/js/main.js',
  dest: './dist/js/bundle.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'main',
  plugins: [
    babel()
  ]
};
