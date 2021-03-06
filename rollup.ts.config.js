import typescriptPlugin from 'rollup-plugin-typescript';
import nodeResolvePlugin from 'rollup-plugin-node-resolve';
import typescript from 'typescript/lib/typescript';

export default {
  entry: './src/ts/main.ts',
  dest: './dist/ts/bundle.js',
  sourceMap: true,
  format: 'umd',
  moduleName: 'main',
  plugins: [
    typescriptPlugin({
      typescript: typescript,
      importHelpers: true
    }),
    nodeResolvePlugin()
  ]
};
