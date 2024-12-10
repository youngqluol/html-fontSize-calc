import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import del from 'rollup-plugin-delete';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'es',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'htmlFontSizeCalc',
    }
  ],
  plugins: [
    del({ targets: 'dist/*' }),
    babel({
      babelHelpers: 'bundled',
      presets: [
        ['@babel/preset-env', {
          targets: '> 0.25%, not dead'
        }]
      ]
    }),
    terser()
  ]
}; 